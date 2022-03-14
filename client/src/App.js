import React, {useState} from "react";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import InfoPage from "./components/InfoPage/InfoPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserContext } from "./context";

function App() {
  const [context, setContext] = useState('Afghanistan')
  return (
    <Router>
      <UserContext.Provider value={[context, setContext]}>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/information" element={<InfoPage />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
