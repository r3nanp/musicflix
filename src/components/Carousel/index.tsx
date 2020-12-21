import { useEffect, useState } from 'react'
import Slider from './components/Slider'
import VideoCard from './components/VideoCard'
import SliderItem from './components/SliderItem'

import { IDataOptions } from '../../repositories/IDataOptions'
import { Container, Title } from './styles'

interface ICarouselProps {
  ignoreFirstVideo?: boolean
  category: IDataOptions
}

const Carousel: React.FC<ICarouselProps> = ({ category, ignoreFirstVideo }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  const categoryTitle = category.title
  const categoryColor = category.color
  const videos = category.videos

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
        {videos.map((video, index) => {
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
