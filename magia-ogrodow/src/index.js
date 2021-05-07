import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

import App from './App';
import reportWebVitals from './reportWebVitals';

const themeMui = createMuiTheme ({
  
  palette: {
    root: {
      main: '#5CDB95'
    },
    primary: {
      main: '#05386B'
    },
    secondary: {
      main: '#5CDB95',
    },
    test: '#5CDB95'
  }
});

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <MuiThemeProvider theme = {themeMui}>
        <App />
      </MuiThemeProvider> 
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
