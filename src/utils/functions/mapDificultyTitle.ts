import { EnumDificulty } from '@services/types/Game/Dificulty'

export function mapDificultyTitle(value: EnumDificulty): string {
  if (value === EnumDificulty.EASY) {
    return 'Fácil'
  } else if (value === EnumDificulty.MEDIUM) {
    return 'Médio'
  } else if (value === EnumDificulty.HARD) {
    return 'Difícil'
  }

  return value
}
