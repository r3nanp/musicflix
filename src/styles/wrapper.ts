import styled from 'styled-components'

export const Wrapper = styled.main`
  padding: 50px 5%;
  flex: 1 1 0%;

  > h1 {
    text-align: center;
  }

  .category {
    margin: 25px 0;
    text-align: left;
  }

  button {
    background: var(--background);
    color: var(--white);
    border: 1px solid var(--white);
    border-radius: 5px;
    cursor: pointer;

    padding: 16px 24px;
    font-size: 16px;
    font-weight: 700;
    transition: all 0.3s;

    &:hover {
      background: var(--primary);
    }

    @media (max-width: 800px) {
      width: 100%;
    }
  }
 `
