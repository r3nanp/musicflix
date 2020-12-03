import LoadingMain from '../../../Shimmer/LoadingMain'
import { LoadingProps } from '../../../../@types'

import { Container } from './styles'

const SliderItem: React.FC<LoadingProps> = ({ isLoading, children }) => {
  return (
    <Container>{isLoading ? <LoadingMain /> : <> {children} </>}</Container>
  )
}

export default SliderItem
