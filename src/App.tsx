import React from 'react';
import './App.css';
import Header from './components/Header';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <News heading="Pressman - Get Daily Updates For Free" pageSize={6} category="science" />
    </>
  );
}

export default App;
