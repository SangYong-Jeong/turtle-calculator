import { createGlobalStyle } from 'styled-components';
import { makeMediaQuery } from 'styles/Media';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  html {
    /* ${makeMediaQuery.phones} */
  }
`;

export default GlobalStyle;
