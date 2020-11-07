import Link from 'next/link'

import { Container, Nav, VideoButton } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <Nav>
        <img
          src="https://fontmeme.com/permalink/201106/b1e120aff119f6ac8c72bccd99141a17.png"
          alt="Logo"
        />

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
