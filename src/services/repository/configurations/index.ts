import { useStorage } from '@hooks/useStorage'

const { getItem, saveItem } = useStorage()
const TOKEN = 'nonogram/configurations'

export class ConfigurationRepository {
  static async getRumbleConfiguration() {
    return await getItem(TOKEN)
  }

  static async changeRumbleConfiguration(value: boolean) {
    await saveItem(TOKEN, value)
  }

  static async clearConfigurations() {
    await saveItem(TOKEN, false)
  }
}
