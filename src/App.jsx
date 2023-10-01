import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SectionOne from "./component/SectionOne";
import "./global.scss";

function App() {
  return (
    <>
      <Router>
        <div
        className="main-container"
        >
          <Routes>
            <Route path="/" element={<SectionOne />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
