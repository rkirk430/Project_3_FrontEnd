import React from 'react';
import './App.css';
//Import Route & our Components
import { Route, Routes } from "react-router-dom";
import Home from './pages/home';
import Price from './pages/price';
import Sentiment from './pages/sentiment';
import Valuation from './pages/valuation';
import Nav from './components/nav';


function App() {
// Use Route Component to specify each route
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/price" element = {<Price/>} />
      </Routes>

    </div>
  );
}

export default App;
