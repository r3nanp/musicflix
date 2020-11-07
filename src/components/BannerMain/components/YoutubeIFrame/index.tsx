import React from 'react'

import { VideoContainer, IFrameContainer } from './styles'

interface Props {
  youtubeID: string
}

const YoutubeIFrame: React.FC<Props> = ({ youtubeID }) => {
  return (
    <VideoContainer>
      <IFrameContainer
        title="Titulo do Iframe"
        src={`https://www.youtube.com/embed/${youtubeID}?autoplay=0&mute=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </VideoContainer>
  )
}

export default YoutubeIFrame
