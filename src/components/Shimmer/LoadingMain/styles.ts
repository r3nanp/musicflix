import styled from 'styled-components'

export const Container = styled.div`
  > div {
    margin-right: 20px;
    .bg-skeleton {
      width: 100%;
      height: 197px;

      filter: brightness(96%);
    }

    span {
      display: flex;
      flex-direction: column;
    }
  }
`

export const Panel = styled.div`
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2), 0 2px 3px rgba(0, 0, 0, 0.5);
`