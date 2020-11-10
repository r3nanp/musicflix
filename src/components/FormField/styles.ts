import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 10px;
  position: relative;

  textarea {
    min-height: 150px;
  }

  input[type='color'] {
    padding-left: 56px;
  }
`

export const Label: any = styled.label`
  .error {
    color: red;
    font-size: 25px;
    font-weight: 700;
  }
`

Label.Text = styled.span`
  color: #e5e5e5;
  height: 57px;
  position: absolute;
  top: 0;
  left: 16px;

  display: flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 17px;
  font-style: normal;
  font-weight: 300;

  transition: 0.1s ease-in-out;
`

interface PropsLabelText {
  value: string
  type: string
}

export const Input = styled.input<PropsLabelText>`
  background: #53585d;
  color: #f5f5f5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;

  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585d;

  padding: 16px 16px;
  margin-bottom: 20px;

  resize: none;
  border-radius: 4px;
  transition: border-color 0.3s;

  &:focus {
    border-bottom-color: var(--primary);
  }
  &:focus:not([type='color']) + ${Label.Text} {
    transform: scale(0.6) translateY(-10px);
  }

  ${props => {
    const hasValue = props.value.length > 0
    return (
      hasValue &&
      `
            &:not([type='color']) + ${Label.Text} {
            transform: scale(.6) translateY(-10px);
            }
        `
    )
  }}
`
