import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Global.js"
import Home from "./Pages/home.js";

const theme = {
  screen: {
      xlg: "1380px",
      lg: "1180px",
      md: "1000px",
      sm: "840px",
      xsm: "640px",
      mobile: "415px"
  },

  color: {
    bgColor: "#EDF0FF",
    black: "#141414",
    black2: "#0C0F1F",
    purple: "#8A9FFA",
    darkBlue: "#0A2493",

  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
