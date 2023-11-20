export enum EnumCellFill {
  FILLED = 'FILLED',
  EMPTY = 'EMPTY',
  FLAGGED = 'FLAGGED',
  HINT = 'HINT'
}

export interface IBoardCell {
  filled: EnumCellFill
}

export interface IBoardHints {
  rows: number[][]
  columns: number[][]
}

export interface IBoard {
  schema: IBoardCell[][]
  solution: IBoardCell[][]
  hints: IBoardHints
  size: number
}
