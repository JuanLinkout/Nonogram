import { SMaskValidators } from '../../types'
import { constants } from './constants'

const isValid = (value: string) => {
  if (constants.maxLength && value.length < constants.maxLength) return false
  else return true
}

export const validators: SMaskValidators = { isValid }
