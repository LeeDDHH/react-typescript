import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Head from './Head'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: YuGothic, "ヒラギノ角ゴ ProN W3", Meiryo, sans-serif;
  }
  body {
    background-color: beige;
    box-sizing: border-box;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Head />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
