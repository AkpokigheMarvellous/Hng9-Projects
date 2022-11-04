import React from "react";
import "./index.css";
import Linktree from "./Pages/Linktree";

import {
  Routes,
  Route,
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Linktree />} />
        
     
      </Routes>
       
    </div>
  );
}

export default App;