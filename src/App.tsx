import React from 'react';
import './App.css';
import Header from './components/Header';
import News from './components/News';

function App() {
  return (
    <>
      <Header />
      <News heading="Pressman - Get Daily Updates For Free" pageSize={6} />
    </>
  );
}

export default App;
