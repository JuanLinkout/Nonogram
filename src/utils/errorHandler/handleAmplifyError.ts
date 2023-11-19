import { AmplifyError, ErrorHandlerResponse } from './types'

// TODO: Ajustar tipagem do amplify error

export const handleAmplifyError = (
  error: AmplifyError
): ErrorHandlerResponse => {
  let message = ''
  const errorCode = error.message || error?.code

  switch (errorCode) {
    case 'Incorrect username or password.':
      message = 'Email ou senha inválido'
      break

    case 'User is not confirmed.':
      message = 'Esse usuário não foi confirmado'
      break

    case 'User does not exist.':
      message = 'Esse usuário não existe.'
      break

    case 'UserMigration failed with error Bad password.':
      message = 'Verifique seu e-mail ou senha.'
      break

    case 'Attempt limit exceeded, please try after some time.':
      message =
        'O limite de envio de códigos foi atingido, espere 10 minutos para enviar novamente.'
      break

    case 'Invalid code provided, please request a code again.':
      message = 'Esse código expirou. Enviamos um novo para o seu email'
      break

    case 'An account with the given email already exists.':
      message = 'Já existe uma conta com esse email'
      break

    case 'Password did not conform with policy: Password not long enough':
      message = 'A senha precisa ter no mínimo 8 caracteres'
      break

    case 'Password does not conform to policy: Password must have lowercase characters':
      message = 'A senha precisa ter no mínimo 1 caracter minúsculo'
      break

    case 'Invalid verification code provided, please try again.':
      message = 'Esse código de verificação não é válido'
      break

    case 'User cannot be confirmed. Current status is CONFIRMED':
      message = 'Esse usuário já foi confirmado'
      break

    case 'Username/client id combination not found.':
      message =
        'Este e-mail ainda não é cadastrado na plataforma, por favor prossiga para a área de cadastro.'
      break

    case 'Network error':
      message = 'Você está sem conexão com a internet.'
      break

    default:
      message = 'Erro desconhecido, por favor tente novamente'
      break
  }

  return {
    title: 'Erro',
    message,
    code: error?.code
  }
}
