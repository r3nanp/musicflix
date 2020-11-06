import styled from 'styled-components'

export const Container = styled.header`
  padding-top: 94px;

  @media (max-width: 800px) {
    padding-top: 40px;
  }
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  height: 94px;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 2px solid var(--primary);
  padding: 0 5%;

  @media (max-width: 800px) {
    height: 40px;
    justify-content: center;
  }
`

export const VideoButton = styled.button`
  background: var(--background);
  color: var(--white);
  border: 1px solid var(--white);
  border-radius: 5px;
  cursor: pointer;

  padding: 16px 24px;
  font-size: 16px;
  font-weight: 700;
  transition: 3ms;

  &:hover {
    opacity: 0.7;
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
