import Image from 'next/image'

import { Container, Nav, VideoButton } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <Nav>
        <Image src="/icon.png" width="168" height="20" />

        <VideoButton>Novo vídeo</VideoButton>
      </Nav>
    </Container>
  )
}

export default Header
