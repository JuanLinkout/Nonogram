import { IMargin, IPadding } from '@services/types/Css'
import { css } from 'styled-components'

export const applyMargin = (props: IMargin) => {
  return css`
    ${props.marginBottom ? { marginBottom: props.marginBottom } : {}};
    ${props.marginLeft ? { marginLeft: props.marginLeft } : {}};
    ${props.marginRight ? { marginRight: props.marginRight } : {}};
    ${props.marginTop ? { marginTop: props.marginTop } : {}};
  `
}

export const applyPadding = (props: IPadding) => {
  return css`
    ${props.paddingBottom ? { paddingBottom: props.paddingBottom } : {}};
    ${props.paddingTop ? { paddingTop: props.paddingTop } : {}};
    ${props.paddingLeft ? { paddingLeft: props.paddingLeft } : {}};
    ${props.paddingRight ? { paddingRight: props.paddingRight } : {}};
  `
}
