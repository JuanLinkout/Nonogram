import { SMaskValidators } from '@utils/maskUtils/types'

const isValid = (value: string) => {
  return !!value.match(/\d*/g)
}
export const validators: SMaskValidators = { isValid }
