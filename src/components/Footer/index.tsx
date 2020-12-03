import Link from 'next/link'

import { Container, LinkedinLogo, GithubLogo } from './styles'

const Footer: React.FC = () => {
  return (
    <Container>
      <div>
        <Link href="https://linkedin.com/in/r3nanp">
          <a target="blank" rel="noopener noreferrer">
            <LinkedinLogo />
          </a>
        </Link>
        <Link href="https://github.com/r3nanp">
          <a target="blank" rel="noopener noreferrer">
            <GithubLogo />
          </a>
        </Link>
      </div>
      <p>Feito com carinho por Renan Pereira</p>
    </Container>
  )
}

export default Footer
