import React,{lazy,Suspense} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Global.js"
import ScrollToTop from "./Comp/ScrollToTop.js";
import Home from "./Pages/home.js";

const Cybalife =lazy(()=>import("./Pages/cybalife.js"))
const Security =lazy(()=>import("./Pages/security.js"))
const ReverseEng =lazy(()=>import("./Pages/reverseEng.js"))
const CloudComp = lazy(()=>import("./Pages/cloudComp.js"))
const Contact = lazy(() => import("./Pages/contact.js"))


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
      <Suspense fallback={<div>loading</div>}>
        <div className="App">
          <BrowserRouter>
          <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cybalife" element={<Cybalife />} />
              <Route path="/cyba-security" element={<Security />} />
              <Route path="/reverse-engineering" element={<ReverseEng />} />
              <Route path="/cloud-computing" element={<CloudComp />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </BrowserRouter>
        </div>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
