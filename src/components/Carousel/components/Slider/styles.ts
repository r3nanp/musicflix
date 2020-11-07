import styled from 'styled-components'

export const Container = styled.div`
  padding: 0;
  margin: 0;

  .react-multiple-carousel__arrow {
    background: var(--primary);
  }

  .react-multiple-carousel__arrow--left {
    left: 0;
    z-index: 0;
    @media (max-width: 800px) {
      display: none;
    }
  }

  .react-multiple-carousel__arrow--right {
    right: 16px;
    z-index: 0;

    @media (max-width: 800px) {
      display: none;
    }
  }

  .react-multi-carousel-item {
    width: 350px;
  }
`
