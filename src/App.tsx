import React from "react";
// import Header from "./components/Header/Header";
import { Route, Routes } from 'react-router-dom';
import MainPage from "./components/MainPage/MainPage";


function App() {
  return (
    <Routes>
      <Route path="/website" element={ <MainPage /> } />
    </Routes>  
  )
}

export default App;