import { theme } from '@global/theme'
import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

export const SwitchCheckSVG = (props: SvgProps) => (
  <Svg width={18} height={14} fill="none" {...props}>
    <Path
      d="m16 2.333-9.625 9.982L2 7.778"
      stroke={props.stroke || theme.colors.black}
      strokeWidth={2}
      strokeLinejoin="round"
    />
  </Svg>
)
