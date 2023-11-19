import { SMaskModule } from '../../types'
import { constants } from './constants'
import { masks } from './mask'
import { validators } from './validator'

export const ZipCodeModule: SMaskModule = {
  ...constants,
  ...masks,
  ...validators
}
