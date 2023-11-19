import { masks } from './mask'
import { validators } from './validator'
import { constants } from './constants'

export const DocumentModule = {
  ...masks,
  ...validators,
  ...constants
}
