import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './commons/style/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <div>
        <GlobalStyle />
        <App />
    </div>
);
