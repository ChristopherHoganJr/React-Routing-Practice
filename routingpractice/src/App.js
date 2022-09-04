import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { useParams } from "react-router";
import "./App.css";

// components
import Singlevar from "./components/Singlevar";
import Threevar from "./components/Threevar";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/:userInput' element={<Singlevar />} />
        <Route
          path='/:userInput/:textColor/:backColor'
          element={<Threevar />}
        />
      </Routes>
    </div>
  );
}

export default App;
