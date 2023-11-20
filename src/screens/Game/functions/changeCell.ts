import { EnumCellFill, IBoard, IBoardCell } from '@services/types/Game/Board'

interface Args {
  row: number
  onGoing: boolean
  column: number
  board: IBoard
  fillMode: EnumCellFill // Valor escolhido para preencher
  onGoingFillMode: EnumCellFill // Valor que foi calculado para auto preenchimento
}

export function changeCell({
  column,
  board,
  fillMode,
  onGoingFillMode,
  row,
  onGoing
}: Args): {
  schema: IBoardCell[][]
} {
  const schema = JSON.parse(JSON.stringify(board.schema))
  const currentValue = schema[row][column]

  const isHint = fillMode === EnumCellFill.HINT
  const isFilled = currentValue.filled === EnumCellFill.FILLED
  if (isHint) {
    if (isFilled) return { schema: board.schema }

    const value = board.solution[row][column].filled
    if (value === EnumCellFill.EMPTY) currentValue.filled = EnumCellFill.FLAGGED
    else currentValue.filled = EnumCellFill.FILLED
    return { schema }
  }

  // Caso esteja arrastando, não preencher blocos que já estão preenchidos com valor oposto que não seja empty
  const isNotEmpty = currentValue.filled !== EnumCellFill.EMPTY
  const isOtherFilling = onGoingFillMode !== currentValue.filled
  if (onGoing && isNotEmpty && isOtherFilling) return { schema: board.schema }

  // Caso o valor seja igual o que tenha que ser preenchido não tem necessidade de alterar
  if (currentValue.filled === fillMode) return { schema: board.schema }
  console.log(fillMode)

  currentValue.filled = fillMode
  return { schema }
}
