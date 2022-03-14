import React from 'react'
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import InfoPage from "./components/InfoPage/InfoPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  

  return (
    <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/information" element={<InfoPage />} />
          </Routes>
        </div>
  
    </Router>
  );
}

export default App;
