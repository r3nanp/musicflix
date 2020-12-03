import styled from 'styled-components'

type ButtonProps = {
  solid?: boolean
}

export const CreateButton = styled.button<ButtonProps>`
  background: var(--background);
  color: ${props => (props.solid ? 'var(--primary)' : 'var(--white)')};
  border: 1px solid var(--white);
  border-radius: 5px;
  cursor: pointer;

  padding: 16px 24px;
  font-size: 16px;
  font-weight: 700;
  transition: all 0.3s;

  &:hover {
    background: ${props => props.solid ? 'var(--blackLighter)' : 'var(--primary)'};
  }

  @media (max-width: 800px) {
    width: 100%;
    background: var(--primary);

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 0;
    border: 0;
    text-align: center;
  }
`
