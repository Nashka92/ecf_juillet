import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import Game from './components/Game/Game';
import Header from './components/Header/Header';
import TableauScore from './components/tableau/TableauScore';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/game' element={<Game />} />
          <Route path='/score' element={<TableauScore/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
