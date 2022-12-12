import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import theme from './commons/style/themes/default';
import GlobalStyle from './commons/style/GlobalStyle';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <div>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App />
        </ThemeProvider>
    </div>
);
