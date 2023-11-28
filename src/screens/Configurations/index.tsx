// External Libraries
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

// Components

// Styles
import { Container } from './styles'
import { Typography } from '@components/toolkit/Typography'
import { theme } from '@global/theme'
import { ConfigurationCard } from './components/ConfigurationCard'
import { ConfigurationItem } from './components/ConfigurationItem'
import { Divider } from '@components/toolkit/Divider/Divider'
import { Switch } from '@components/buttons/Switch'
import { useConfiguration } from './hooks/useConfiguration'

export const Configurations: React.FC = () => {
  const { top } = useSafeAreaInsets()
  const { handleRumbleChange, handleClearCachePress, isRumbleActive } =
    useConfiguration()

  return (
    <Container paddingTop={`${top}px`}>
      <Typography variant="h4" color={theme.colors.textPrimary}>
        Configurações
      </Typography>

      <ConfigurationCard marginTop="24px" marginBottom="32px">
        <ConfigurationItem
          title="Ativar vibração"
          description="Habilite ou desabilite vibração"
          onPress={handleRumbleChange}
          endComponent={
            <Switch
              setSelected={handleRumbleChange}
              selected={isRumbleActive}
            />
          }
        />
        <Divider />

        <ConfigurationItem
          onPress={handleClearCachePress}
          title="Limpar dados"
          description="Limpar todos os caches do aplicativo"
        />
      </ConfigurationCard>
    </Container>
  )
}
