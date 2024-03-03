import { Stack, YStack, Button, ButtonText, XStack, useMedia, Theme } from '@my/ui'
import { IconSendLogo } from 'app/components/icons'
import { useContext, useEffect, useState } from 'react'
import { SignInForm } from 'app/features/auth/sign-in/sign-in-form'

import { AuthCarouselContext } from 'app/features/auth/AuthCarouselContext'
import { Carousel } from 'app/features/auth/components/Carousel'

export const SignInScreen = () => {
  const { carouselProgress } = useContext(AuthCarouselContext)
  const media = useMedia()

  if (media.gtMd)
    return (
      <YStack w="100%" h={'100%'} jc="flex-start" pt="$7">
        <YStack jc="flex-end" f={1} gap="$2" $gtMd={{ pb: '$8' }} ml="auto" w="100%" maw={738}>
          <Carousel currentKey={carouselProgress.toString()} fullscreen={false} />
        </YStack>
      </YStack>
    )

  return (
    <YStack w="100%" h={'100%'} jc="flex-start" pt="$7">
      <SignInScreensMobile />
    </YStack>
  )
}

const screens = ['screen1', 'screen2', 'screen3', 'form'] as const

const SignInScreensMobile = () => {
  const [signInProgress, setSignInProgress] = useState(0)
  const { setCarouselProgress } = useContext(AuthCarouselContext)

  useEffect(() => {
    setCarouselProgress(0)
  }, [setCarouselProgress])

  const nextScreen = () => {
    setSignInProgress((progress) => {
      setCarouselProgress(progress + 1)
      return progress + 1
    })
  }

  const getSignInButtons = (page: (typeof screens)[number] | undefined) => {
    switch (true) {
      case page === 'screen1' || page === 'screen2':
        return <ContinueButton nextScreen={nextScreen} />
      case page === 'screen3':
        return <SignInButtons nextScreen={nextScreen} />
      case page === 'form':
        return null
      default:
        return <ContinueButton nextScreen={nextScreen} />
    }
  }

  return (
    <>
      <Stack>
        {screens[signInProgress] === 'form' ? (
          <Theme inverse={true}>
            <IconSendLogo size={'$2'} color={'$background'} />
          </Theme>
        ) : (
          <IconSendLogo size={'$2'} color={'$white'} />
        )}
      </Stack>
      <YStack jc={screens[signInProgress] === 'form' ? 'flex-start' : 'flex-end'} f={1} gap="$2">
        {screens[signInProgress] === 'form' ? (
          <SignInForm />
        ) : (
          <>
            <Carousel fullscreen={false} currentKey={screens[signInProgress]} />

            {getSignInButtons(screens[signInProgress])}
          </>
        )}
      </YStack>
    </>
  )
}

const ContinueButton = ({ nextScreen }: { nextScreen: () => void }) => (
  <Stack w="100%" jc="center" py="$5" gap="$2">
    <Button
      bc="transparent"
      hoverStyle={{ backgroundColor: '$transparent', boc: '$accentBackground' }}
      bw={1}
      boc={'$accentBackground'}
      br="$5"
      onPress={nextScreen}
    >
      <ButtonText col={'$accentBackground'}>CONTINUE</ButtonText>
    </Button>
  </Stack>
)

const SignInButtons = ({ nextScreen }: { nextScreen: () => void }) => (
  <XStack w="100%" jc="center" py="$5" gap="$4">
    <Button f={1} bg="$accentBackground" br="$5" onPress={nextScreen}>
      <ButtonText col="$black">LOGIN</ButtonText>
    </Button>
    <Button
      bg="transparent"
      bw={1}
      borderColor={'$accentBackground'}
      f={1}
      br="$5"
      onPress={nextScreen}
    >
      <ButtonText col={'$accentBackground'}>SIGN UP</ButtonText>
    </Button>
  </XStack>
)
