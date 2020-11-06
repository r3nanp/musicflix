import Image from 'next/image'
import Link from 'next/Link'

import { Container, Nav, VideoButton } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <Nav>
        <Image src="/icon.png" width="168" height="20" />

        <Link href="/createVideo">
          <a>
            <VideoButton>Novo vídeo</VideoButton>
          </a>
        </Link>
      </Nav>
    </Container>
  )
}

export default Header
