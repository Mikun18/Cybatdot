import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Global.js"
import Home from "./Pages/home.js";
import Cybalife from "./Pages/cybalife.js";

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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cybalife" element={<Cybalife />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
