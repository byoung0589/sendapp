import { IconProps, themed } from '@tamagui/helpers-icon'
import { memo } from 'react'
import { Path, Svg } from 'react-native-svg'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SendTile = (props: IconProps) => {
  return (
    <Svg width="42" height="42" viewBox="0 0 42 42" fill="none">
      <Path
        d="M41 21C41 32.0457 32.0457 41 21 41C9.9543 41 1 32.0457 1 21C1 9.9543 9.9543 1 21 1"
        stroke="#C3AB8E"
        stroke-width="2"
        stroke-linecap="round"
      />
      <Path
        d="M20.2929 20.2929C19.9024 20.6834 19.9024 21.3166 20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071L20.2929 20.2929ZM42 1C42 0.447715 41.5523 0 41 0H32C31.4477 0 31 0.447715 31 1C31 1.55228 31.4477 2 32 2H40V10C40 10.5523 40.4477 11 41 11C41.5523 11 42 10.5523 42 10V1ZM21.7071 21.7071L41.7071 1.70711L40.2929 0.292893L20.2929 20.2929L21.7071 21.7071Z"
        fill="#C3AB8E"
      />
    </Svg>
  )
}
const IconSendTile = memo(themed(SendTile))
export { IconSendTile }