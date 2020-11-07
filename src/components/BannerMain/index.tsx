import getYoutubeId from '../../utils/getYoutubeId'
import YoutubeIFrame from './components/YoutubeIFrame'

import { Container, WrapperContent, WrapperItem, VideoTitle } from './styles'

interface VideoProps {
  url: string | undefined
  videoTitle: string | undefined
}

const BannerMain: React.FC<VideoProps> = ({ url, videoTitle }) => {
  const youTubeID = getYoutubeId(url)
  const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`

  return (
    <Container
      style={{
        backgroundImage: `url(${bgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <WrapperContent>
        <WrapperItem>
          <VideoTitle>{videoTitle}</VideoTitle>
        </WrapperItem>

        <WrapperItem>
          <YoutubeIFrame youtubeID={youTubeID}  />
        </WrapperItem>
      </WrapperContent>
    </Container>
  )
}

export default BannerMain

