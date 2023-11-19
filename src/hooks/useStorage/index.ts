import { MMKV } from 'react-native-mmkv'

export const store = new MMKV()

export function useStorage() {
  // Functions
  async function saveItem(key: string, value: any) {
    let updatedValue = value

    if (typeof updatedValue !== 'string') {
      updatedValue = JSON.stringify(updatedValue)
    }

    await store.set(key, updatedValue)
  }

  async function getItem(key: string) {
    const item = await store.getString(key)
    let parsedItem

    if (item) {
      try {
        parsedItem = JSON.parse(item)
      } catch (e) {
        parsedItem = item || undefined
      }
    } else parsedItem = undefined

    return parsedItem
  }

  async function removeItem(key: string) {
    await store.delete(key)
  }

  return { saveItem, getItem, removeItem }
}
