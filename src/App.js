import React from 'react';
import './App.css';
//Import Route & our Components
import { Route, Routes } from "react-router-dom";
import Home from './pages/home';
import Price from './pages/price';
import Sentiment from './pages/sentiment';
import Government from './pages/government';
import Header from './components/main';
import Nav from './components/nav';
import Sandbox from './components/sandbox';



function App() {
// Use Route Component to specify each route
  return (
    <div className="App">
      <Header/>
      <Sandbox />
      <Nav />
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/price" element = {<Price/>} />
         {/* <Route path = "/price/:ticker" element = {<Price/>} /> */}
        <Route path = "/sentiment" element = {<Sentiment />} />
        <Route path = "/government" element = {<Government />} />
      </Routes>

    </div>
  );
}

export default App;
