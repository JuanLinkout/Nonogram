export function isValid(text: string): boolean {
  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
  return regex.test(text)
}

export const validators = { isValid }
