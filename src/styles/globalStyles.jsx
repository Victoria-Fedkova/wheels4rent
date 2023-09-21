import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import ManropeMedium from '../fonts/Manrope-Medium.ttf';
import ManropeRegular from '../fonts/Manrope-Regular.ttf';
import ManropeSemiBold from '../fonts/Manrope-SemiBold.ttf';

const GlobalStyle = createGlobalStyle`


    @font-face {
        font-family: 'ManropeRegular';
        src: local('ManropeRegular'),
        url(${ManropeRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'ManropeMedium';
        src: local('ManropeMedium'),
        url(${ManropeMedium}) format('truetype');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'ManropeSemiBold';
        src: local('ManropeSemiBold'),
        url(${ManropeSemiBold}) format('truetype');
        font-weight: 600;
        font-style: normal;
    }




body {
  margin: 0; 
  padding: 0;
   background-color: #f6f7f9;


  font-family: 'Manrope',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  

}



a {
    text-decoration: none;
    color: currentColor;
  }

p {
    padding: 0;
    margin: 0;
}


ul,
ol {
  list-style: none;
  padding: 0;
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

button {
    cursor: pointer;
    border: none;
  }
`;

export default GlobalStyle;
