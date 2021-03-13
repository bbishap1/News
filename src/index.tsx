import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ThemeProvider} from "react-jss";

const theme = {
  backgroundColor: 'linear-gradient( 180deg ,rgba(37,38,41,.24) 26.22%,#27292d),linear-gradient( 0deg,#171544,#171544)',
  buttonPrimary : "#1bb76e",
  hoverPrimary : "#10e380",
  buttonSecondary: "#4a58fb",
  boxColor: "#2e3035",
  textPrimary: "#fff"
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);