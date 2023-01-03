import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import pretendardRegular from '../../assets/font/Pretendard_Regular.woff2';
import pretendardMedium from '../../assets/font/Pretendard_Medium.woff2';
import pretendardBold from '../../assets/font/Pretendard_Bold.woff2';
import defaultTheme from './themes/default';

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Pretendard_Regular';
    font-style: normal;
    font-weight: 400;
    src: local('Pretendard_Regular'), url(${pretendardRegular}) format('woff2');
}

@font-face {
    font-family: 'Pretendard_Medium';
    font-style: normal;
    font-weight: 500;
    src: local('Pretendard_Medium'), url(${pretendardMedium}) format('woff2');
}

@font-face {
    font-family: 'Pretendard_Bold';
    font-style: normal;
    font-weight: 700;
    src: local('Pretendard_Bold'), url(${pretendardBold}) format('woff2');
}

${reset}
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Pretendard_Regular';
    font-size: 14px;
    font-weight: 400;
}

button {
    font-family: 'Pretendard_Regular';
    font-size: inherit;
    border: none;
    background-color: ${defaultTheme.palette.white}; 
}

input {
    font-family: 'Pretendard_Regular';
    font-size: inherit;
    border: none;
    &:focus {
        outline: none;
    }
}

li {
    list-style: none;
}

a {
    text-decoration: none;
}

textarea {
    border: none;
    overflow: auto;
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;

    resize: none;
    font-family: 'Pretendard_Regular';
    font-size: 14px;
}
`;

export default GlobalStyle;
