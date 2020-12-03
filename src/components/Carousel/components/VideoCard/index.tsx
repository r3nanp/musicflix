import getYoutubeId from '../../../../utils/getYoutubeId'

import { Container } from './styles'

interface VideoCardProps {
  videoURL: string
  videoTitle: string
  categoryColor: string
}

const VideoCard: React.FC<VideoCardProps> = ({
  videoURL,
  videoTitle,
  categoryColor,
}) => {
  const image = `https://img.youtube.com/vi/${getYoutubeId(
    videoURL
  )}/hqdefault.jpg`

  return (
    <Container
      href={videoURL}
      target="_blank"
      rel="noopener noreferrer"
      style={{ backgroundImage: `url(${image})`, borderColor: categoryColor || 'blue', }}
      title={videoTitle}
    />
  )
}

export default VideoCard
