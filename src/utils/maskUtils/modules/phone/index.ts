import { constants } from './constants'
import { masks } from './mask'
import { validators } from './validator'

export const PhoneModule = { ...masks, ...validators, ...constants }
