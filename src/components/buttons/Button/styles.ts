import { IMargin } from '@services/types/Css'
import { applyMargin } from '@utils/functions/applyCss'
import { FlattenInterpolation } from 'styled-components'
import styled, { css, DefaultTheme, ThemeProps } from 'styled-components/native'
import { Touchable } from '../Touchable'
import { ButtonVariants } from './types'

export interface ContainerProps extends IMargin {
  variant: ButtonVariants
  width?: string
  flex?: number
  height?: string
}

const buttonVariants: Record<
  ButtonVariants,
  FlattenInterpolation<ThemeProps<DefaultTheme>>
> = {
  filled: css`
    background-color: ${({ theme }) => theme.colors.primary};
    border-color: transparent;
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.border};
  `,
  outlined: css`
    background-color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.border};
  `,
  transparent: css`
    background-color: transparent;
    border-color: transparent;
  `,
  blueOutlined: css`
    background-color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.primary};
  `
}

export const Container = styled(Touchable)<ContainerProps>`
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};

  padding: 0 16px;
  border-width: 1px;

  ${({ height }) => (height ? { height } : { height: '40px' })};
  ${({ width }) => (width ? { width } : {})};
  ${({ flex }) => (flex ? { flex } : {})};
  border-radius: 3px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${({ variant }) => buttonVariants[variant]};
  ${props => applyMargin(props)};
`
