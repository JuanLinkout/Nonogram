import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

export const HomeSVG = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke={props.stroke || '#000'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"
    />
    <Path
      stroke={props.stroke || '#000'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 22V12h6v10"
    />
  </Svg>
)
