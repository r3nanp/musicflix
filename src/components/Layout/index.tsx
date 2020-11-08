import Footer from '../Footer'
import Header from '../Header'

import { Container } from './styles'

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header text="Novo Vídeo" to="/createVideo" />
      {children}
      <Footer />
    </Container>
  )
}

export default Layout
