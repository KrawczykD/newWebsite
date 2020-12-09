import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { normalize } from "react-style-reset/string";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyles = createGlobalStyle`
  ${normalize};
  box-sizing: border-box;
`;

const theme = {
  mainColor: "rgb(74, 188, 221)",
  gradientColor: "rgb(255, 255, 255)",

  breakPoints: {
    s: "576px",
    m: "768px",
    l: "992px",
    xl: "1200px",
  },
};

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
