import React from 'react';
import Navbar from './Navbar';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Expense from './Expense';
import Create from './Create';

function App() {
  // const title = 'Welcome to the new blog';
  // const likes = 50;
  // const link = "http://www.google.com"
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
      <Routes>
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Expense" element={<Expense />} />
        <Route path="/Create" element={<Create />} />
        
      </Routes>
      </div>
    </div>
  );
}

export default App;