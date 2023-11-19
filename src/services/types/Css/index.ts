export interface IMargin {
  marginBottom?: string
  marginTop?: string
  marginLeft?: string
  marginRight?: string
}

export interface IPadding {
  paddingBottom?: string
  paddingTop?: string
  paddingLeft?: string
  paddingRight?: string
}

export interface IFlexBox {
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
  alignItems?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
  flexDirection?: 'column' | 'column-reverse' | 'row-reverse' | 'row'
  flex?: number
}
