import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: var(--background);
    color: var(--white);
    font: 400 16px Roboto, system-ui, sans-serif;
  }
  input, button {
    outline: none;
    border: none;
  }

  :root {
    --primary: ${props => props.theme.colors.primary};
    --white: ${props => props.theme.colors.white};
    --background: ${props => props.theme.colors.background};
    --blackLighter: ${props => props.theme.colors.blackLighter};
    --grayLight: ${props => props.theme.colors.grayLight};
    --grayMedium: ${props => props.theme.colors.grayMedium};
    --lightblue: ${props => props.theme.colors.lightblue};
    --green: ${props => props.theme.colors.green};
    --outline: ${props => props.theme.colors.outline}; 
  }
`
