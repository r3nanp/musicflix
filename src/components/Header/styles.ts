import styled from 'styled-components'

export const Container = styled.header`
  padding-top: 94px;

  @media (max-width: 800px) {
    padding-top: 40px;
  }
`

export const Nav = styled.nav`
  background: var(--background);

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

  > a img {
    max-width: 168px;
    cursor: pointer;
  }

  @media (max-width: 800px) {
    height: 40px;
    justify-content: center;

    > a img {
      max-width: 105px;
    }
  }
`
