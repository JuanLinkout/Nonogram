interface ErrorBody {
  errorCode: string
  errorMessage: string
  error: string
  displayMessage?: string
  displayTitle?: string
}

export interface HttpError {
  response: {
    data: ErrorBody
  }
}

export interface ErrorHandlerResponse {
  title: string
  message: string
  code?: string
  onConfirm?: () => void
}

export interface AmplifyError {
  message: string
  code: string
}
