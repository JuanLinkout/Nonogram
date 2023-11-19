export type SMaskTypes =
  | 'email'
  | 'phone'
  | 'document'
  | 'zipcode'
  | 'birthdate'
  | 'currency'
  | 'number'
  | 'float'

export interface SMaskConstants {
  minLength?: number
  maxLength?: number
}

export interface SMaskValidators {
  isValid: (value: string) => boolean
}

export interface SMaskMasks {
  mask: (value: string) => string
  unmask: (value: string) => string
}

export type SMaskModule = SMaskValidators & SMaskMasks & SMaskConstants

export interface SMaskInterface {
  [value: string]: SMaskModule
}
