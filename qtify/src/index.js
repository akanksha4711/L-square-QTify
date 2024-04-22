import React from 'react';
import ReactDOM from 'react-dom/client';
import {StyledEngineProvider} from "@mui/material/styles";
import './index.css';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#34C94B'
    },
    secondary: {
      main: '#121212'
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StyledEngineProvider injectFirst>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </StyledEngineProvider>
);
