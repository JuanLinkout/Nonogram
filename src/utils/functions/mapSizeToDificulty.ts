import { EnumDificulty } from '@services/types/Game/Dificulty'

export function mapSizeToDificulty(value: number): EnumDificulty {
  if (value === 5) {
    return EnumDificulty.EASY
  } else if (value === 10) {
    return EnumDificulty.MEDIUM
  }

  return EnumDificulty.MEDIUM
}
