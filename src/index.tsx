import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import * as serviceWorker from "./serviceWorker.ts";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Create a theme
const theme = createTheme({
  palette: {
    background: {
      paper: '#1c2027',
    },
    divider: '#0a192f',
  },
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister(); 