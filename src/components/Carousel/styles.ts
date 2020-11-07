import styled from 'styled-components'

export const Container = styled.section`
  color: var(--white);
  min-height: 197px;
  margin-left: 5%;
  margin-bottom: 16px;
`
export const Title = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  margin: 16px 0;
  display: inline-block;
  padding: 20px;
  background: red;
  line-height: 1;
  border-radius: 5px;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`

export const SliderItem = styled.div`
  margin-right: 16px;
  width: fit-content;
  > img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`
