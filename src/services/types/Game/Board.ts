export enum EnumCellFill {
  FILLED = 'FILLED',
  EMPTY = 'EMPTY',
  FLAGGED = 'FLAGGED'
}

export interface IBoardCell {
  filled: EnumCellFill
}

export interface IBoard {
  schema: IBoardCell[][]
  solution: IBoardCell[][]
  size: number
}
