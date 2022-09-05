import React from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css';
import DiyHomeOne from "./Components/DIY/Components/DiyHome/DiyHome";
import 'bootstrap/dist/css/bootstrap.min.css';
export const DesContext = React.createContext({});

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DiyHomeOne/>} />
      </Routes>
    </>
  );
}

export default App;
