import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root{
--color-primary: hsl(185, 75%, 39%);
--color-primary-dark: hsl(229, 23%, 23%);
--color-text: hsl(227, 10%, 46%);
--color-text-light: hsl(0, 0%, 59%);

--fw-normal: 400;
--fw-bold: 700;

}

*{
box-sizing: inherit;
margin: 0;
padding: 0;
font-family: 'Kumbh Sans', sans-serif;
}

html{
box-sizing: border-box;
}

body{
font-size: 18px;
}

`

export default GlobalStyle;