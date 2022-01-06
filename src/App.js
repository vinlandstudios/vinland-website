import React, { Fragment } from "react";
import Appbar from "./common/Appbar";
import Home from "./pages/Home/Home";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { theme } from "./theme";
import Docs from "./pages/Docs/Docs";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <div>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/docs" element={<Docs />} />
            </Routes>
          </Router>
        </div>
      </Fragment>
    </ThemeProvider>
  );
}
