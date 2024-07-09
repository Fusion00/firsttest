import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Test1 from "./Test1";
// import './App.css';

function App() {

  return (
    <div>
      <BrowserRouter basename="firsttest">
          <Routes>
            <Route path="/" element={<Test1 />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
