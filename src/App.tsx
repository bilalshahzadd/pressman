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
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<News key="general" heading="Pressman - Get Daily Updates For Free" pageSize={6} category="general" />}></Route>
          <Route path="/Entertainment" element={<News key="entertainment" heading="Pressman - Get Daily Updates For Free" pageSize={6} category="entertainment" />}></Route>
          <Route path="/Sports" element={<News key="sports" heading="Pressman - Get Daily Updates For Free" pageSize={6} category="sports" />}></Route>
          <Route path="/Health" element={<News key="health" heading="Pressman - Get Daily Updates For Free" pageSize={6} category="health" />}></Route>
          <Route path="/Business" element={<News key="business" heading="Pressman - Get Daily Updates For Free" pageSize={6} category="business" />}></Route>
          <Route path="/Science" element={<News key="science" heading="Pressman - Get Daily Updates For Free" pageSize={6} category="science" />}></Route>
          <Route path="/Technology" element={<News key="technology" heading="Pressman - Get Daily Updates For Free" pageSize={6} category="technology" />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
