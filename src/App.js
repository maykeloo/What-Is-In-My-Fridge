import React from "react";

import "./App.css";
import Home from "./pages/Home";
import { HashRouter as Router} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Home />
      </Router>
    </>
  );
}

export default App;
