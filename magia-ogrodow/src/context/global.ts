import { createGlobalStyle } from 'styled-components';
import StyledTheme from './styledTheme'

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }: StyledTheme) => theme.body};
    color: ${({ theme }: StyledTheme) => theme.text};
    transition: all 0.25s linear;
  }`