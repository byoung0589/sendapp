import { XStack } from '@my/ui'
import { ColorTokens } from '@my/ui/types'
import { themed, IconProps } from '@tamagui/helpers-icon'
import { memo } from 'react'
import { Path, Svg, G } from 'react-native-svg'

const QRCode = (props: IconProps) => {
  const { size, color, ...rest } = props
  return (
    <Svg
      viewBox="0 0 24 24"
      color={color as ColorTokens | undefined}
      width={size ?? 24}
      height={size ?? 24}
      fill={'none'}
      {...rest}
    >
      <G id="qr-code (1) 1">
        <G id="Layer 2">
          <G id="Union">
            <Path d="M-1.8295 4.9205C-2.04048 5.13147 -2.32663 5.25 -2.625 5.25C-2.92337 5.25 -3.20952 5.13147 -3.4205 4.9205C-3.63147 4.70952 -3.75 4.42337 -3.75 4.125V-0.375C-3.75 -1.27011 -3.39442 -2.12855 -2.76149 -2.76149C-2.12855 -3.39442 -1.27011 -3.75 -0.375 -3.75H4.125C4.42337 -3.75 4.70952 -3.63147 4.9205 -3.4205C5.13147 -3.20952 5.25 -2.92337 5.25 -2.625C5.25 -2.32663 5.13147 -2.04048 4.9205 -1.8295C4.70952 -1.61853 4.42337 -1.5 4.125 -1.5H-0.375C-0.673368 -1.5 -0.959517 -1.38147 -1.1705 -1.1705C-1.38147 -0.959517 -1.5 -0.673368 -1.5 -0.375V4.125C-1.5 4.42337 -1.61853 4.70952 -1.8295 4.9205Z" fill="#BCA687" />
            <Path d="M4.9205 25.8295C4.70952 25.6185 4.42337 25.5 4.125 25.5H-0.375C-0.673368 25.5 -0.959517 25.3815 -1.1705 25.1705C-1.38147 24.9595 -1.5 24.6734 -1.5 24.375V19.875C-1.5 19.5766 -1.61853 19.2905 -1.8295 19.0795C-2.04048 18.8685 -2.32663 18.75 -2.625 18.75C-2.92337 18.75 -3.20952 18.8685 -3.4205 19.0795C-3.63147 19.2905 -3.75 19.5766 -3.75 19.875V24.375C-3.75 25.2701 -3.39442 26.1286 -2.76149 26.7615C-2.12855 27.3944 -1.27011 27.75 -0.375 27.75H4.125C4.42337 27.75 4.70952 27.6315 4.9205 27.4205C5.13147 27.2095 5.25 26.9234 5.25 26.625C5.25 26.3266 5.13147 26.0405 4.9205 25.8295Z" fill="#BCA687" />
            <Path d="M26.625 18.75C26.3266 18.75 26.0405 18.8685 25.8295 19.0795C25.6185 19.2905 25.5 19.5766 25.5 19.875V24.375C25.5 24.6734 25.3815 24.9595 25.1705 25.1705C24.9595 25.3815 24.6734 25.5 24.375 25.5H19.875C19.5766 25.5 19.2905 25.6185 19.0795 25.8295C18.8685 26.0405 18.75 26.3266 18.75 26.625C18.75 26.9234 18.8685 27.2095 19.0795 27.4205C19.2905 27.6315 19.5766 27.75 19.875 27.75H24.375C25.2701 27.75 26.1286 27.3944 26.7615 26.7615C27.3944 26.1286 27.75 25.2701 27.75 24.375V19.875C27.75 19.5766 27.6315 19.2905 27.4205 19.0795C27.2095 18.8685 26.9234 18.75 26.625 18.75Z" fill="#BCA687" />
            <Path d="M24.375 -3.75H19.875C19.5766 -3.75 19.2905 -3.63147 19.0795 -3.4205C18.8685 -3.20952 18.75 -2.92337 18.75 -2.625C18.75 -2.32663 18.8685 -2.04048 19.0795 -1.8295C19.2905 -1.61853 19.5766 -1.5 19.875 -1.5H24.375C24.6734 -1.5 24.9595 -1.38147 25.1705 -1.1705C25.3815 -0.959517 25.5 -0.673368 25.5 -0.375V4.125C25.5 4.42337 25.6185 4.70952 25.8295 4.9205C26.0405 5.13147 26.3266 5.25 26.625 5.25C26.9234 5.25 27.2095 5.13147 27.4205 4.9205C27.6315 4.70952 27.75 4.42337 27.75 4.125V-0.375C27.75 -1.27011 27.3944 -2.12855 26.7615 -2.76149C26.1286 -3.39442 25.2701 -3.75 24.375 -3.75Z" fill="#BCA687" />
            <Path fillRule="evenodd" clipRule="evenodd" d="M3 15.375H6.375C6.97174 15.375 7.54403 15.6121 7.96599 16.034C8.38795 16.456 8.625 17.0283 8.625 17.625V21C8.625 21.5967 8.38795 22.169 7.96599 22.591C7.54403 23.0129 6.97174 23.25 6.375 23.25H3C2.40326 23.25 1.83097 23.0129 1.40901 22.591C0.987053 22.169 0.75 21.5967 0.75 21V17.625C0.75 17.0283 0.987053 16.456 1.40901 16.034C1.83097 15.6121 2.40326 15.375 3 15.375ZM3 17.625V21H6.375V17.625H3Z" fill="#BCA687" />
            <Path fillRule="evenodd" clipRule="evenodd" d="M23.25 21V17.625C23.25 17.0283 23.0129 16.456 22.591 16.034C22.169 15.6121 21.5967 15.375 21 15.375H17.625C17.0283 15.375 16.456 15.6121 16.034 16.034C15.6121 16.456 15.375 17.0283 15.375 17.625V21C15.375 21.5967 15.6121 22.169 16.034 22.591C16.456 23.0129 17.0283 23.25 17.625 23.25H21C21.5967 23.25 22.169 23.0129 22.591 22.591C23.0129 22.169 23.25 21.5967 23.25 21ZM17.625 17.625H21V21H17.625V17.625Z" fill="#BCA687" />
            <Path d="M1.875 10.875H10.875C11.4717 10.875 12.044 11.1121 12.466 11.534C12.8879 11.956 13.125 12.5283 13.125 13.125V22.125C13.125 22.4234 13.0065 22.7095 12.7955 22.9205C12.5845 23.1315 12.2984 23.25 12 23.25C11.7016 23.25 11.4155 23.1315 11.2045 22.9205C10.9935 22.7095 10.875 22.4234 10.875 22.125V13.125H1.875C1.57663 13.125 1.29048 13.0065 1.0795 12.7955C0.868526 12.5845 0.75 12.2984 0.75 12C0.75 11.7016 0.868526 11.4155 1.0795 11.2045C1.29048 10.9935 1.57663 10.875 1.875 10.875Z" fill="#BCA687" />
            <Path d="M0.75 3V7.5C0.75 7.79837 0.868526 8.08452 1.0795 8.2955C1.29048 8.50647 1.57663 8.625 1.875 8.625C2.17337 8.625 2.45952 8.50647 2.6705 8.2955C2.88147 8.08452 3 7.79837 3 7.5V3H7.5C7.79837 3 8.08452 2.88147 8.2955 2.6705C8.50647 2.45952 8.625 2.17337 8.625 1.875C8.625 1.57663 8.50647 1.29048 8.2955 1.0795C8.08452 0.868526 7.79837 0.75 7.5 0.75H3C2.40326 0.75 1.83097 0.987053 1.40901 1.40901C0.987053 1.83097 0.75 2.40326 0.75 3Z" fill="#BCA687" />
            <Path fillRule="evenodd" clipRule="evenodd" d="M21 8.625H17.625C17.0283 8.625 16.456 8.38795 16.034 7.96599C15.6121 7.54403 15.375 6.97174 15.375 6.375V3C15.375 2.40326 15.6121 1.83097 16.034 1.40901C16.456 0.987053 17.0283 0.75 17.625 0.75H21C21.5967 0.75 22.169 0.987053 22.591 1.40901C23.0129 1.83097 23.25 2.40326 23.25 3V6.375C23.25 6.97174 23.0129 7.54403 22.591 7.96599C22.169 8.38795 21.5967 8.625 21 8.625ZM21 3H17.625V6.375H21V3Z" fill="#BCA687" />
            <Path d="M16.5 13.125H17.625C17.9234 13.125 18.2095 13.0065 18.4205 12.7955C18.6315 12.5845 18.75 12.2984 18.75 12C18.75 11.7016 18.6315 11.4155 18.4205 11.2045C18.2095 10.9935 17.9234 10.875 17.625 10.875H16.5C16.2016 10.875 15.9155 10.9935 15.7045 11.2045C15.4935 11.4155 15.375 11.7016 15.375 12C15.375 12.2984 15.4935 12.5845 15.7045 12.7955C15.9155 13.0065 16.2016 13.125 16.5 13.125Z" fill="#BCA687" />
            <Path d="M20.2045 11.2045C20.4155 10.9935 20.7016 10.875 21 10.875H22.125C22.4234 10.875 22.7095 10.9935 22.9205 11.2045C23.1315 11.4155 23.25 11.7016 23.25 12C23.25 12.2984 23.1315 12.5845 22.9205 12.7955C22.7095 13.0065 22.4234 13.125 22.125 13.125H21C20.7016 13.125 20.4155 13.0065 20.2045 12.7955C19.9935 12.5845 19.875 12.2984 19.875 12C19.875 11.7016 19.9935 11.4155 20.2045 11.2045Z" fill="#BCA687" />
            <Path d="M12 6.375H6.375C6.07663 6.375 5.79048 6.49353 5.5795 6.7045C5.36853 6.91548 5.25 7.20163 5.25 7.5C5.25 7.79837 5.36853 8.08452 5.5795 8.2955C5.79048 8.50647 6.07663 8.625 6.375 8.625H12C12.2984 8.625 12.5845 8.50647 12.7955 8.2955C13.0065 8.08452 13.125 7.79837 13.125 7.5C13.125 7.20163 13.0065 6.91548 12.7955 6.7045C12.5845 6.49353 12.2984 6.375 12 6.375Z" fill="#BCA687" />
            <Path d="M11.2045 1.0795C11.4155 0.868526 11.7016 0.75 12 0.75C12.2984 0.75 12.5845 0.868526 12.7955 1.0795C13.0065 1.29048 13.125 1.57663 13.125 1.875V3C13.125 3.29837 13.0065 3.58452 12.7955 3.7955C12.5845 4.00647 12.2984 4.125 12 4.125C11.7016 4.125 11.4155 4.00647 11.2045 3.7955C10.9935 3.58452 10.875 3.29837 10.875 3V1.875C10.875 1.57663 10.9935 1.29048 11.2045 1.0795Z" fill="#BCA687" />
          </G>
        </G>
      </G>
    </Svg>
  )
}
const IconQRCode = memo(themed(QRCode))
export { IconQRCode }