import { ColorTokens } from '@my/ui/types'
import { IconProps, themed } from '@tamagui/helpers-icon'
import { memo } from 'react'
import { Path, Svg } from 'react-native-svg'

const Account = (props: IconProps) => {
  const { size, color, ...rest } = props
  return (
    <Svg
      fill="none"
      viewBox="0 0 20 20"
      color={color as ColorTokens | undefined}
      width={size ?? 20}
      height={size ?? 20}
      {...rest}
    >
      <Path
        d="M9.99967 9.97913C9.08301 9.97913 8.33301 9.68746 7.74967 9.10413C7.16634 8.52079 6.87467 7.77079 6.87467 6.85413C6.87467 5.93746 7.16634 5.18746 7.74967 4.60413C8.33301 4.02079 9.08301 3.72913 9.99967 3.72913C10.9163 3.72913 11.6663 4.02079 12.2497 4.60413C12.833 5.18746 13.1247 5.93746 13.1247 6.85413C13.1247 7.77079 12.833 8.52079 12.2497 9.10413C11.6663 9.68746 10.9163 9.97913 9.99967 9.97913ZM3.33301 16.6666V14.7083C3.33301 14.1805 3.46495 13.7291 3.72884 13.3541C3.99273 12.9791 4.33301 12.6944 4.74967 12.5C5.68023 12.0833 6.57259 11.7708 7.42676 11.5625C8.28092 11.3541 9.13856 11.25 9.99967 11.25C10.8608 11.25 11.715 11.3576 12.5622 11.5729C13.4094 11.7882 14.2977 12.0985 15.2272 12.504C15.6619 12.7002 16.0105 12.9847 16.2728 13.3575C16.5352 13.7302 16.6663 14.1805 16.6663 14.7083V16.6666H3.33301ZM4.58301 15.4166H15.4163V14.7083C15.4163 14.4861 15.3504 14.2743 15.2184 14.0729C15.0865 13.8715 14.9233 13.7222 14.7288 13.625C13.84 13.1944 13.0275 12.8993 12.2913 12.7395C11.5552 12.5798 10.7913 12.5 9.99967 12.5C9.20801 12.5 8.43717 12.5798 7.68717 12.7395C6.93717 12.8993 6.12467 13.1944 5.24967 13.625C5.05523 13.7222 4.89551 13.8715 4.77051 14.0729C4.64551 14.2743 4.58301 14.4861 4.58301 14.7083V15.4166ZM9.99967 8.72913C10.5413 8.72913 10.9893 8.55204 11.3434 8.19788C11.6976 7.84371 11.8747 7.39579 11.8747 6.85413C11.8747 6.31246 11.6976 5.86454 11.3434 5.51038C10.9893 5.15621 10.5413 4.97913 9.99967 4.97913C9.45801 4.97913 9.01009 5.15621 8.65592 5.51038C8.30176 5.86454 8.12467 6.31246 8.12467 6.85413C8.12467 7.39579 8.30176 7.84371 8.65592 8.19788C9.01009 8.55204 9.45801 8.72913 9.99967 8.72913Z"
        fill="currentColor"
      />
    </Svg>
  )
}
const IconAccount = memo(themed(Account))
export { IconAccount }