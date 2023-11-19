// External Libraries
import React, { useEffect, useMemo, useState } from 'react'
import { ImageProps } from 'react-native'

// Assets
import FallbackImage from '@assets/images/fallback.png'

// Styles
import { ImageComponent, StyledImageProps } from './styles'
import { getImagePath } from '@utils/functions/getImagePath'
import FastImage from 'react-native-fast-image'

interface Props extends StyledImageProps {
  source?: string | ImageProps
  resizeMode?: 'center' | 'cover' | 'contain' | 'stretch'
}

export const Image: React.FC<Props> = ({ source, resizeMode, ...rest }) => {
  // State
  const [error, setError] = useState(false)

  const mapResizeMode = {
    center: FastImage.resizeMode.center,
    cover: FastImage.resizeMode.cover,
    contain: FastImage.resizeMode.contain,
    stretch: FastImage.resizeMode.stretch
  }

  // Constants
  const imageSrc = useMemo(() => {
    if (error || !source) return FallbackImage

    const src =
      typeof source === 'string' ? { uri: getImagePath(source) } : source
    return src
  }, [source, error])

  useEffect(() => {
    setError(false)
  }, [source])

  // Functions
  function handleError() {
    setError(true)
  }

  function getResizeMode() {
    if (error || !source) {
      return FastImage.resizeMode.contain
    }

    if (resizeMode) return mapResizeMode[resizeMode]
    else return undefined
  }

  return (
    <ImageComponent
      source={imageSrc}
      resizeMode={getResizeMode()}
      onError={handleError}
      {...rest}
    />
  )
}
