import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

import Formulario from "./components/pages/Formulario.js"
import Login from "./components/pages/Login.js"
import AdminPage from "./components/pages/AdminPage.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Formulario" element={<Formulario />} />
          <Route path="/AdminPage" element={<AdminPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
