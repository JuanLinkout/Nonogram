import { EnumDirection } from '@services/types/Game/Direction'

interface Args {
  column: number
  row: number

  previousColumn: number
  previousRow: number
}

export function getFillingDirection({
  column,
  row,
  previousColumn,
  previousRow
}: Args): EnumDirection {
  'worklet'

  if (previousColumn !== column) return EnumDirection.HORIZONTAL
  else return EnumDirection.VERTICAL
}
