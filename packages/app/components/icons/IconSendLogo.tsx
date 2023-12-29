import { ColorTokens } from '@my/ui/types'
import { themed, IconProps } from '@tamagui/helpers-icon'
import { memo } from 'react'
import { Svg, Path, Defs, LinearGradient, Stop } from 'react-native-svg'

const SendLogo = (props: IconProps) => {
  const { size, color, ...rest } = props
  return (
    <Svg
      width={size ?? 95}
      height={size ?? 16}
      viewBox="0 0 154 26"
      fill="white"
    >
      <Path
        d="M145.029 20.4116C145.602 20.4116 145.983 20.2191 146.365 19.8342C146.747 19.4492 146.938 19.0643 146.938 18.4868V8.09924C146.938 7.5218 146.747 6.94435 146.365 6.55939C145.983 6.17443 145.602 5.98195 145.029 5.98195H120.222V25.9936H127.284V0.399994H145.983C147.129 0.399994 148.083 0.784956 149.037 1.16992C149.992 1.55488 150.946 2.13232 151.71 2.90225C152.473 3.47969 153.046 4.4421 153.427 5.4045C153.809 6.36691 154 7.32932 154 8.4842V18.1083C154 19.2631 153.809 20.2256 153.427 21.188C153.046 22.1504 152.473 22.9203 151.71 23.6902C150.946 24.4601 149.992 25.0376 149.037 25.4225C148.083 25.8075 147.129 26 145.983 26H134.156L128.62 20.418H145.029V20.4116Z"
        fill="white"
        fillOpacity="0.89"
      />
      <Path
        d="M53.0433 15.9846H71.1698V10.4026H53.0433V15.9846ZM48.4624 5.98195H41.4001V25.9936H71.1698V20.4116H48.4624V0.399994H71.1698V5.98195H48.4624Z"
        fill="white"
        fillOpacity="0.89"
      />
      <Path
        d="M32.4292 0.399994V5.98195H6.86504V8.86917C6.86504 9.44661 7.05591 9.83157 7.24042 10.0241C7.62216 10.409 8.00391 10.409 8.39201 10.409H26.9003C28.0455 10.409 29.1907 10.6015 29.9542 10.9865C30.9086 11.3714 31.4812 11.7564 32.0474 12.3338C32.6201 12.9113 33.0018 13.6812 33.3836 14.4511C33.5744 15.221 33.7653 16.1835 33.7653 17.1459V19.2632C33.7653 20.2256 33.5744 20.9955 33.3836 21.7654C33.0082 22.5353 32.6201 23.3053 32.0474 23.8827C31.4812 24.6526 30.9022 25.0376 29.9542 25.4225C29.1907 25.8075 28.0455 26 26.9003 26H0.559892V20.418H25.3669C25.7487 20.418 25.9395 20.418 26.3276 20.0331C26.5122 19.8406 26.703 19.4556 26.703 18.8782V17.5308C26.703 17.1459 26.5122 16.7609 26.3276 16.5684C25.9459 16.1835 25.755 15.991 25.3669 15.991H6.67417C5.7198 15.991 4.95632 15.991 4.00195 15.606C3.23847 15.4135 2.47498 15.0286 1.90236 14.4511C1.32974 13.8737 0.757127 13.2962 0.375382 12.5263C0.18451 11.9489 0 11.1789 0 10.2165V5.98195H6.8714V0.399994H32.4419H32.4292Z"
        fill="white"
        fillOpacity="0.89"
      />
      <Path
        d="M112.583 26V8.4842C112.583 7.32932 112.201 6.36691 111.819 5.4045C111.444 4.4421 110.865 3.47969 110.108 2.70977C109.344 2.13232 108.581 1.55488 107.627 1.16992C106.672 0.784956 105.527 0.399994 104.573 0.399994H85.8735V5.98195H103.618C104.191 5.98195 104.573 6.17443 104.954 6.55939C105.336 6.94435 105.527 7.5218 105.527 8.09924V25.9936H112.589L112.583 26ZM78.8049 5.98836V26H85.8672V5.98836H78.8049Z"
        fill="white"
        fillOpacity="0.89"
      />
    </Svg>
  )
}
const IconSendLogo = memo(themed(SendLogo))
export { IconSendLogo }