import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import Game from './components/Game/Game';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/game' element={<Game />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
