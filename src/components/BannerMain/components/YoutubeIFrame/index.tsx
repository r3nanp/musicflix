import { VideoContainer, IFrameContainer } from './styles'

interface YoutubeIFrameProps {
  youtubeID: string
}

const YoutubeIFrame: React.FC<YoutubeIFrameProps> = ({ youtubeID }) => {
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
