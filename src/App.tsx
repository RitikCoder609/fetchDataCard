import React from "react";

import { BrowserRouter } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
    </div>
  );
}

export default App;
