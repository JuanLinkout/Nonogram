import { IMargin, IPadding } from '@services/types/Css'
import { applyMargin, applyPadding } from '@utils/functions/applyCss'
import FastImage from 'react-native-fast-image'
import styled from 'styled-components/native'

export interface StyledImageProps extends IMargin, IPadding {
  width?: number
  height?: number
  isFullSize?: boolean
  borderRadiusProp?: string
}

export const ImageComponent = styled(FastImage)<StyledImageProps>`
  width: ${props =>
    props.width ? `${props.width}px` : props.isFullSize ? '100%' : '50px'};
  height: ${props =>
    props.height ? `${props.height}px` : props.isFullSize ? '100%' : '50px'};

  border-radius: ${props => props.borderRadiusProp || '4px'};

  ${props => applyMargin(props)};
  ${props => applyPadding(props)};
`
