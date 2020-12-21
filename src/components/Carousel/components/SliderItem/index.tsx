import LoadingMain from '../../../Shimmer/LoadingMain'
import { ILoadingProps } from '../../../../repositories/ILoadingProps'

import { Container } from './styles'

const SliderItem: React.FC<ILoadingProps> = ({ isLoading, children }) => {
  return (
    <Container>{isLoading ? <LoadingMain /> : <> {children} </>}</Container>
  )
}

export default SliderItem
