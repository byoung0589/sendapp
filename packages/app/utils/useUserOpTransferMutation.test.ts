import {
  UseUserOpTransferMutationArgs,
  useUserOpTransferMutation,
} from './useUserOpTransferMutation'
import { Wrapper } from './__mocks__/Wrapper'
import { renderHook } from '@testing-library/react-hooks'
import { describe, test } from '@jest/globals'
import { act } from '@testing-library/react-native'
import { baseMainnetBundlerClient, daimoAccountAbi } from '@my/wagmi'
import { signUserOp } from './userop'
import { encodeFunctionData, erc20Abi, isAddress, slice } from 'viem'

import { assert } from './assert'

jest.mock('./userop', () => ({
  signUserOp: jest.fn(),
}))
jest.mock('wagmi')
jest.mock('@my/wagmi', () => ({
  __esModule: true,
  ...jest.requireActual('@my/wagmi'),
  baseMainnetClient: {
    chain: {
      id: 845337,
    },
    simulateContract: jest.fn().mockResolvedValue({}),
  },
  baseMainnetBundlerClient: {
    sendUserOperation: jest.fn(),
    waitForUserOperationReceipt: jest.fn().mockResolvedValue({ success: true }),
  },
}))

describe('useUserOpTransferMutation', () => {
  beforeEach(() => {
    jest.useFakeTimers()
    // @ts-expect-error mock
    baseMainnetBundlerClient.sendUserOperation.mockReset()
    // @ts-expect-error mock
    baseMainnetBundlerClient.waitForUserOperationReceipt.mockReset()
    // @ts-expect-error mock
    signUserOp.mockReset()
  })

  test('should return error when nonce is greater than 1 when uninitialized account', async () => {
    const args = {
      sender: `0x${'1'.repeat(40)}`,
      amount: 1n,
      token: undefined,
      to: `0x${'2'.repeat(40)}`,
      nonce: 1n,
      initCode: `0x${'3'.repeat(60)}`,
    } as UseUserOpTransferMutationArgs
    const { result } = renderHook(() => useUserOpTransferMutation(), {
      wrapper: Wrapper,
    })

    expect(result.current).toBeDefined()
    expect(result.current.mutateAsync(args)).rejects.toThrow(
      'Init code must be 0x for existing account'
    )
    await act(async () => {
      jest.runAllTimers()
    })
  })

  test('should return error when nonce is 0 and initCode is not defined when uninitialized account', async () => {
    const args = {
      sender: `0x${'1'.repeat(40)}`,
      amount: 1n,
      token: undefined,
      to: `0x${'2'.repeat(40)}`,
      nonce: 0n,
      initCode: '0x',
    } as UseUserOpTransferMutationArgs
    const { result } = renderHook(() => useUserOpTransferMutation(), {
      wrapper: Wrapper,
    })

    expect(result.current).toBeDefined()
    expect(result.current.mutateAsync(args)).rejects.toThrow(
      'Must provide init code for new account'
    )
    await act(async () => {
      jest.runAllTimers()
    })
  })

  test('should send user op transfer in native currency when no token', async () => {
    const args = {
      sender: `0x${'1'.repeat(40)}`,
      amount: 1n,
      token: undefined,
      to: `0x${'2'.repeat(40)}`,
      nonce: 0n,
      initCode: `0x${'3'.repeat(60)}`,
    } as UseUserOpTransferMutationArgs
    baseMainnetBundlerClient.sendUserOperation = jest.fn().mockImplementation((_args) => {
      const callData = encodeFunctionData({
        abi: daimoAccountAbi,
        functionName: 'executeBatch',
        args: [
          [
            {
              dest: args.to,
              value: args.amount,
              data: '0x',
            },
          ],
        ],
      })
      expect(_args).toStrictEqual({
        userOperation: {
          sender: args.sender,
          nonce: args.nonce,
          factory: slice(args.initCode, 0, 20),
          factoryData: slice(args.initCode, 20),
          callData,
          callGasLimit: 300000n,
          verificationGasLimit: 700000n,
          preVerificationGas: 300000n,
          maxFeePerGas: 1000000n,
          maxPriorityFeePerGas: 1000000n,
          paymaster: undefined,
          paymasterData: undefined,
          paymasterPostOpGasLimit: undefined,
          paymasterVerificationGasLimit: undefined,
          signature: '0x123',
        },
      })
      return Promise.resolve('0x123')
    })
    // @ts-expect-error mock
    baseMainnetBundlerClient.waitForUserOperationReceipt.mockResolvedValue({ success: true })
    // @ts-expect-error mock
    signUserOp.mockResolvedValue('0x123')

    const { result } = renderHook(() => useUserOpTransferMutation(), {
      wrapper: Wrapper,
    })

    expect(result.current).toBeDefined()
    await act(async () => {
      await result.current.mutateAsync(args)
      jest.runAllTimers()
    })
    expect(signUserOp).toHaveBeenCalledTimes(1)
    expect(baseMainnetBundlerClient.sendUserOperation).toHaveBeenCalledTimes(1)
    expect(baseMainnetBundlerClient.waitForUserOperationReceipt).toHaveBeenCalledTimes(1)
  })

  test('should send user op transfer in ERC20 token when token is defined', async () => {
    const args = {
      sender: `0x${'1'.repeat(40)}`,
      amount: 1n,
      token: `0x${'3'.repeat(40)}`,
      to: `0x${'2'.repeat(40)}`,
      nonce: 0n,
      initCode: `0x${'3'.repeat(60)}`,
    } as UseUserOpTransferMutationArgs
    baseMainnetBundlerClient.sendUserOperation = jest.fn().mockImplementation((_args) => {
      assert(!!args.token && isAddress(args.token), 'Invalid token address')
      const callData = encodeFunctionData({
        abi: daimoAccountAbi,
        functionName: 'executeBatch',
        args: [
          [
            {
              dest: args.token,
              value: 0n,
              data: encodeFunctionData({
                abi: erc20Abi,
                functionName: 'transfer',
                args: [args.to, args.amount],
              }),
            },
          ],
        ],
      })
      expect(_args).toStrictEqual({
        userOperation: {
          sender: args.sender,
          nonce: args.nonce,
          factory: slice(args.initCode, 0, 20),
          factoryData: slice(args.initCode, 20),
          callData,
          callGasLimit: 300000n,
          verificationGasLimit: 700000n,
          preVerificationGas: 300000n,
          maxFeePerGas: 1000000n,
          maxPriorityFeePerGas: 1000000n,
          paymaster: undefined,
          paymasterData: undefined,
          paymasterPostOpGasLimit: undefined,
          paymasterVerificationGasLimit: undefined,
          signature: '0x123',
        },
      })
      return Promise.resolve('0x123')
    })
    // @ts-expect-error mock
    baseMainnetBundlerClient.waitForUserOperationReceipt.mockResolvedValue({ success: true })
    // @ts-expect-error mock
    signUserOp.mockResolvedValue('0x123')

    const { result } = renderHook(() => useUserOpTransferMutation(), {
      wrapper: Wrapper,
    })

    expect(result.current).toBeDefined()
    await act(async () => {
      await result.current.mutateAsync(args)
      jest.runAllTimers()
    })
    expect(signUserOp).toHaveBeenCalledTimes(1)
    expect(baseMainnetBundlerClient.sendUserOperation).toHaveBeenCalledTimes(1)
    expect(baseMainnetBundlerClient.waitForUserOperationReceipt).toHaveBeenCalledTimes(1)
  })

  test('should return error when nonce is not a bigint', async () => {
    // @ts-expect-error mock
    const args = {
      sender: `0x${'1'.repeat(40)}`,
      amount: 1n,
      token: undefined,
      to: `0x${'2'.repeat(40)}`,
      nonce: 1,
      initCode: `0x${'3'.repeat(60)}`,
    } as UseUserOpTransferMutationArgs
    const { result } = renderHook(() => useUserOpTransferMutation(), {
      wrapper: Wrapper,
    })

    expect(result.current).toBeDefined()
    expect(result.current.mutateAsync(args)).rejects.toThrow('Invalid nonce')
    await act(async () => {
      jest.runAllTimers()
    })
  })

  test('should return error when nonce is less than 0', async () => {
    const args = {
      sender: `0x${'1'.repeat(40)}`,
      amount: 1n,
      token: undefined,
      to: `0x${'2'.repeat(40)}`,
      nonce: -1n,
      initCode: `0x${'3'.repeat(60)}`,
    } as UseUserOpTransferMutationArgs
    const { result } = renderHook(() => useUserOpTransferMutation(), {
      wrapper: Wrapper,
    })

    expect(result.current).toBeDefined()
    expect(result.current.mutateAsync(args)).rejects.toThrow('Invalid nonce')
    await act(async () => {
      jest.runAllTimers()
    })
  })

  test('should return error when amount is not a bigint', async () => {
    // @ts-expect-error mock
    const args = {
      sender: `0x${'1'.repeat(40)}`,
      amount: 1,
      token: undefined,
      to: `0x${'2'.repeat(40)}`,
      nonce: 0n,
      initCode: `0x${'3'.repeat(60)}`,
    } as UseUserOpTransferMutationArgs
    const { result } = renderHook(() => useUserOpTransferMutation(), {
      wrapper: Wrapper,
    })

    expect(result.current).toBeDefined()
    expect(result.current.mutateAsync(args)).rejects.toThrow('Invalid amount')
    await act(async () => {
      jest.runAllTimers()
    })
  })

  test('should return error when amount is less than 0', async () => {
    const args = {
      sender: `0x${'1'.repeat(40)}`,
      amount: -1n,
      token: undefined,
      to: `0x${'2'.repeat(40)}`,
      nonce: 0n,
      initCode: `0x${'3'.repeat(60)}`,
    } as UseUserOpTransferMutationArgs
    const { result } = renderHook(() => useUserOpTransferMutation(), {
      wrapper: Wrapper,
    })

    expect(result.current).toBeDefined()
    expect(result.current.mutateAsync(args)).rejects.toThrow('Invalid amount')
    await act(async () => {
      jest.runAllTimers()
    })
  })

  test('should return error when sender is not a valid address', async () => {
    const args = {
      sender: `0x${'1'.repeat(39)}`,
      amount: 1n,
      token: undefined,
      to: `0x${'2'.repeat(40)}`,
      nonce: 0n,
      initCode: `0x${'3'.repeat(60)}`,
    } as UseUserOpTransferMutationArgs
    const { result } = renderHook(() => useUserOpTransferMutation(), {
      wrapper: Wrapper,
    })

    expect(result.current).toBeDefined()
    expect(result.current.mutateAsync(args)).rejects.toThrow('Invalid send account address')
    await act(async () => {
      jest.runAllTimers()
    })
  })

  test('should return error when to is not a valid address', async () => {
    const args = {
      sender: `0x${'1'.repeat(40)}`,
      amount: 1n,
      token: undefined,
      to: `0x${'2'.repeat(39)}`,
      nonce: 0n,
      initCode: `0x${'3'.repeat(60)}`,
    } as UseUserOpTransferMutationArgs
    const { result } = renderHook(() => useUserOpTransferMutation(), {
      wrapper: Wrapper,
    })

    expect(result.current).toBeDefined()
    expect(result.current.mutateAsync(args)).rejects.toThrow('Invalid to address')
    await act(async () => {
      jest.runAllTimers()
    })
  })

  test('should return error when initCode is not a valid hex', async () => {
    // @ts-expect-error mock
    const args = {
      sender: `0x${'1'.repeat(40)}`,
      amount: 1n,
      token: undefined,
      to: `0x${'2'.repeat(40)}`,
      nonce: 0n,
      initCode: '123',
    } as UseUserOpTransferMutationArgs
    const { result } = renderHook(() => useUserOpTransferMutation(), {
      wrapper: Wrapper,
    })

    expect(result.current).toBeDefined()
    expect(result.current.mutateAsync(args)).rejects.toThrow('Invalid init code')
    await act(async () => {
      jest.runAllTimers()
    })
  })

  test('should return error when token is not a valid address', async () => {
    const args = {
      sender: `0x${'1'.repeat(40)}`,
      amount: 1n,
      token: `0x${'3'.repeat(39)}`,
      to: `0x${'2'.repeat(40)}`,
      nonce: 0n,
      initCode: `0x${'3'.repeat(60)}`,
    } as UseUserOpTransferMutationArgs
    const { result } = renderHook(() => useUserOpTransferMutation(), {
      wrapper: Wrapper,
    })

    expect(result.current).toBeDefined()
    expect(result.current.mutateAsync(args)).rejects.toThrow('Invalid token address')
    await act(async () => {
      jest.runAllTimers()
    })
  })

  test('should return error when token is not defined and amount is 0', async () => {
    const args = {
      sender: `0x${'1'.repeat(40)}`,
      amount: 0n,
      token: undefined,
      to: `0x${'2'.repeat(40)}`,
      nonce: 0n,
      initCode: `0x${'3'.repeat(60)}`,
    } as UseUserOpTransferMutationArgs
    const { result } = renderHook(() => useUserOpTransferMutation(), {
      wrapper: Wrapper,
    })

    expect(result.current).toBeDefined()
    expect(result.current.mutateAsync(args)).rejects.toThrow('Invalid amount')
    await act(async () => {
      jest.runAllTimers()
    })
  })
})
