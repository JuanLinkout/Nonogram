import { EnumCellFill, IBoardCell } from '@services/types/Game/Board'

export function generateGrid(size: number): IBoardCell[][] {
  const grid: IBoardCell[][] = []

  for (let i = 0; i < size; i++) {
    const row: IBoardCell[] = []
    for (let j = 0; j < size; j++) {
      row.push({ filled: EnumCellFill.EMPTY })
    }
    grid.push(row)
  }

  return grid
}
