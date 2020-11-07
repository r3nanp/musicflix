import styled from 'styled-components'

export const Container = styled.section`
  height: 80vh;
  position: relative;
  color: #fff;
  &:after,
  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    height: 20%;
  }
  &:before {
    top: 0;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
  &:after {
    bottom: 0;
    background: linear-gradient(0deg, #141414 0%, transparent 100%);
  }

  @media (max-width: 800px) {
    height: auto;
    min-height: 50vh;
  }
`

export const WrapperContent = styled.section`
  margin: 0 5%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
  @media (max-width: 800px) {
    padding-top: 100px;
    flex-direction: column;
  }
`

export const WrapperItem = styled.div`
  width: 50%;
  display: inline-block;
  margin-bottom: 50px;
  margin-top: 100px;
  @media (max-width: 800px) {
    width: 100%;
  }
`

export const VideoTitle = styled.h2`
  font-weight: 700;
  font-size: 40px;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 32px;
  @media (max-width: 800px) {
    font-size: 32px;
    text-align: center;
  }
`
