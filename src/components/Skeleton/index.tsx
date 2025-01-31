import styled from 'styled-components'

export default styled.div`
  background-image: linear-gradient(-90deg, #e7edf1 0%, #f8f8f8 50%, #e7edf1 100%);
  background-size: 400% 400%;
  border-radius: 5px;
  width: fit-content;
  animation: shimmer 1.2s ease-in-out infinite;

  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }

    100% {
      background-position: -135% 0%;
    }
  }
`
