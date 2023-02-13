import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

import Formulario from "./components/Formulario.js"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Formulario />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
