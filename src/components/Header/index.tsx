import Link from 'next/link'
import Button from '../Button'

import { Container, Nav } from './styles'

interface HeaderProps {
  to?: string | undefined
  text?: string
}

const Header: React.FC<HeaderProps> = ({ text, to }) => {
  return (
    <Container>
      <Nav>
        <Link href="/">
          <a>
            <img
              src="https://fontmeme.com/permalink/201106/b1e120aff119f6ac8c72bccd99141a17.png"
              alt="Logo"
            />
          </a>
        </Link>

        <Link href={to}>
          <a>
            <Button type="button">{text}</Button>
          </a>
        </Link>
      </Nav>
    </Container>
  )
}

export default Header
