export enum EnumCellFill {
  FILLED = 'FILLED',
  EMPTY = 'EMPTY',
  FLAGGED = 'FLAGGED',
  HINT = 'HINT'
}

export interface IBoardCell {
  filled: EnumCellFill
  color?: string
}

export interface IBoardHints {
  rows: number[][]
  columns: number[][]
}

export interface IBoard {
  name: string
  schema: IBoardCell[][]
  solution: IBoardCell[][]
  hints: IBoardHints
  size: number
}
