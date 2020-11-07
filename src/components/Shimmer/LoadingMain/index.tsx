import { Container, Panel } from './styles'

import Skeleton from '../../Skeleton'

const LoadingMain: React.FC = () => {
  return (
    <Container>
      <Panel>
        <Skeleton className="bg-skeleton" />
        <span>
          <Skeleton className="title-skeleton" />
          <Skeleton className="content-skeleton" />
        </span>
      </Panel>
    </Container>
  )
}

export default LoadingMain
