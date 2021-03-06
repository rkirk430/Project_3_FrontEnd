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
const URL = "https://project-3-rk.herokuapp.com/";
// Use Route Component to specify each route
  return (
    <div className="App">
      <Sandbox />
      <Header/>
      <Nav />
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/lastprice" element = {<Price URL={URL}/>} />
         {/* <Route path = "/price/:ticker" element = {<Price/>} /> */}
        <Route path = "/sentiment" element = {<Sentiment URL={URL} />} />
        <Route path = "/government" element = {<Government URL={URL} />} />
      </Routes>

    </div>
  );
}

export default App;
