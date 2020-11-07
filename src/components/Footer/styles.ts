import styled, { css } from 'styled-components'
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai'

export const Container = styled.footer`
  background: var(--outline);
  border-top: 2px solid var(--primary);
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  padding: 32px 16px;

  > div {
    display: flex;
    padding: 10px;
  }

  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`

const iconCss = css`
  width: 40px;
  height: 40px;
  fill: white;
  flex-shrink: 0;
  transition: 0.4s;
  cursor: pointer;
  margin: 5px;
  &:hover {
    fill: var(--blackLighter);
  }
`

export const LinkedinLogo = styled(AiOutlineLinkedin)`
  ${iconCss}
`

export const GithubLogo = styled(AiOutlineGithub)`
  ${iconCss}
`
