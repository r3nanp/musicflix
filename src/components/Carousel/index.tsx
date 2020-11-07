import { useEffect, useState } from 'react'
import Slider from './components/Slider'
import VideoCard from './components/VideoCard'
import SliderItem from './components/SliderItem'

import { Container, Title } from './styles'

export interface CarouselOptions {
  title: string
  color: string
  videos: Array<{
    title: string
    url: string
  }>
}

interface Carousel {
  ignoreFirstVideo?: boolean
  category: CarouselOptions
}

const Carousel: React.FC<Carousel> = ({
  category,
  ignoreFirstVideo,
}) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  const categoryTitle = category?.title
  const categoryColor = category?.color
  const videos = category?.videos

  return (
    <Container>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'blue' }}>
            {categoryTitle}
          </Title>
        </>
      )}
      <Slider>
        {videos?.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null
          }

          return (
            <SliderItem isLoading={isLoading} key={video.title}>
              <VideoCard
                videoTitle={video.title}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          )
        })}
      </Slider>
    </Container>
  )
}

export default Carousel
