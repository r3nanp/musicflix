import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import { Container } from './styles'

const Slider: React.FC = ({ children }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 1440, min: 1024 },
      items: 3,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  }

  return (
    <Container>
      <Carousel
        responsive={responsive}
        ssr={true}
        infinite={false}
        swipeable={true}
        draggable={true}
      >
        {children}
      </Carousel>
    </Container>
  )
}

export default Slider
