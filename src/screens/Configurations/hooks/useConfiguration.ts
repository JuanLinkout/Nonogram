import { ConfigurationRepository } from '@services/repository/configurations'
import { GamesRepository } from '@services/repository/games'
import { useEffect, useState } from 'react'
import { Alert } from 'react-native'

export function useConfiguration() {
  const [isRumbleActive, setIsRumbleActive] = useState(false)

  async function fetchConfigurations() {
    const response = await ConfigurationRepository.getRumbleConfiguration()
    setIsRumbleActive(response)
  }

  async function handleRumbleChange() {
    const updatedValue = !isRumbleActive
    await ConfigurationRepository.changeRumbleConfiguration(updatedValue)
    setIsRumbleActive(updatedValue)
  }

  async function handleClearCachePress() {
    Alert.alert(
      'Deseja limpar o cache?',
      'Caso você limpe o cache todos o progresso será perdido.',
      [
        {
          text: 'Limpar',
          style: 'destructive',
          onPress: async () => {
            await GamesRepository.clearGames()
            await ConfigurationRepository.clearConfigurations()
            setIsRumbleActive(false)
          }
        },
        {
          text: 'Cancelar',
          style: 'cancel'
        }
      ]
    )
  }

  useEffect(() => {
    fetchConfigurations()
  }, [])

  return { isRumbleActive, handleClearCachePress, handleRumbleChange }
}
