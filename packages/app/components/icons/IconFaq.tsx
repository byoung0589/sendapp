import { ColorTokens } from '@my/ui/types'
import { IconProps, themed } from '@tamagui/helpers-icon'
import { memo } from 'react'
import { Path, Svg } from 'react-native-svg'

const Faq = (props: IconProps) => {
  const { size, color, ...rest } = props
  return (
    <Svg
      viewBox="0 0 24 24"
      color={color as ColorTokens | undefined}
      width={size ?? 24}
      height={size ?? 24}
      {...rest}
    >
      <Path
        d="M20.1818 6.2729H16.9091V4.63654C16.9088 4.41964 16.8225 4.2117 16.6691 4.05832C16.5158 3.90495 16.3078 3.81865 16.0909 3.81836H3.81818C3.60128 3.81865 3.39334 3.90495 3.23996 4.05832C3.08659 4.2117 3.00029 4.41964 3 4.63654V14.4547C3.00029 14.6716 3.08659 14.8796 3.23996 15.0329C3.39334 15.1863 3.60128 15.2726 3.81818 15.2729H4.63636V17.3184C4.63638 17.3993 4.66038 17.4783 4.70534 17.5456C4.75029 17.6129 4.81417 17.6653 4.88891 17.6962C4.96365 17.7272 5.0459 17.7353 5.12524 17.7195C5.20458 17.7037 5.27747 17.6648 5.33468 17.6076L7.6694 15.2729H9.13636V16.9093C9.13666 17.1262 9.22295 17.3341 9.37633 17.4875C9.5297 17.6409 9.73764 17.7272 9.95455 17.7275H16.3306L18.6653 20.0621C18.7225 20.1193 18.7954 20.1583 18.8748 20.1741C18.9541 20.1898 19.0363 20.1817 19.1111 20.1508C19.1858 20.1198 19.2497 20.0674 19.2947 20.0001C19.3396 19.9329 19.3636 19.8538 19.3636 19.7729V17.7275H20.1818C20.3987 17.7272 20.6067 17.6409 20.76 17.4875C20.9134 17.3341 20.9997 17.1262 21 16.9093V7.09109C20.9997 6.87418 20.9134 6.66624 20.76 6.51287C20.6067 6.35949 20.3987 6.2732 20.1818 6.2729ZM7.5 14.4547C7.44628 14.4547 7.39309 14.4653 7.34346 14.4859C7.29383 14.5064 7.24874 14.5366 7.21077 14.5746L5.45455 16.3308V14.8638C5.45455 14.7553 5.41144 14.6513 5.33473 14.5745C5.25801 14.4978 5.15395 14.4547 5.04545 14.4547H3.81818V4.63654L16.0909 4.63773V14.4547H7.5ZM20.1818 16.9093H18.9545C18.846 16.9093 18.742 16.9524 18.6653 17.0291C18.5886 17.1058 18.5455 17.2099 18.5455 17.3184V18.7853L16.7892 17.0291C16.7513 16.9911 16.7062 16.961 16.6565 16.9404C16.6069 16.9198 16.5537 16.9093 16.5 16.9093H9.95455V15.2729H16.0909C16.3078 15.2726 16.5158 15.1863 16.6691 15.0329C16.8225 14.8796 16.9088 14.6716 16.9091 14.4547V7.09109L20.1818 7.09227V16.9093Z"
        fill="currentColor"
      />
      <Path
        d="M10.1591 7.29474C10.2675 7.29481 10.3716 7.33793 10.4483 7.41464C10.525 7.49134 10.5681 7.59536 10.5682 7.70384V8.52202C10.5681 8.63049 10.525 8.73451 10.4483 8.81122C10.3716 8.88792 10.2675 8.93104 10.1591 8.93111C9.83369 8.93147 9.52173 9.06088 9.29165 9.29096C9.06157 9.52104 8.93215 9.833 8.9318 10.1584V10.5675C8.9318 10.676 8.9749 10.78 9.05162 10.8567C9.12834 10.9335 9.23239 10.9766 9.34089 10.9766C9.44938 10.9766 9.55344 10.9335 9.63016 10.8567C9.70688 10.78 9.74998 10.676 9.74998 10.5675V10.1584C9.75004 10.0499 9.79316 9.94589 9.86987 9.86918C9.94657 9.79248 10.0506 9.74935 10.1591 9.74929C10.4845 9.74893 10.7964 9.61952 11.0265 9.38944C11.2566 9.15935 11.386 8.8474 11.3863 8.52202V7.70384C11.386 7.37845 11.2566 7.0665 11.0265 6.83642C10.7964 6.60634 10.4845 6.47692 10.1591 6.47656H8.9318C8.8233 6.47656 8.71924 6.51966 8.64253 6.59638C8.56581 6.6731 8.52271 6.77716 8.52271 6.88565C8.52271 6.99415 8.56581 7.0982 8.64253 7.17492C8.71924 7.25164 8.8233 7.29474 8.9318 7.29474H10.1591Z"
        fill="currentColor"
      />
      <Path
        d="M9.34078 12.6132C9.56782 12.6132 9.75188 12.4292 9.75188 12.2021C9.75188 11.9751 9.56782 11.791 9.34078 11.791C9.11374 11.791 8.92969 11.9751 8.92969 12.2021C8.92969 12.4292 9.11374 12.6132 9.34078 12.6132Z"
        fill="currentColor"
      />
    </Svg>
  )
}
const IconFaq = memo(themed(Faq))
export { IconFaq }