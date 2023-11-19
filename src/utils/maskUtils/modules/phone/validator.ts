import { SMaskValidators } from '../../types'

// TODO: Substituir por uma regex
function isValid(text: string): boolean {
  if (text) {
    text = text
      .replace(/\(/g, '')
      .replace(/\)/g, '')
      .replace(/\s/g, '')
      .replace(/-/g, '')

    switch (text.length) {
      case 10:
        return true
      case 11:
        return true
      case 14:
        return true
      case 15:
        return true
      default:
        return false
    }
  }

  return false
}

export const validators: SMaskValidators = { isValid }
