import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';
import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <>
        <Router>
          <Header />
          {/* <LoadingBar
            color='#f11946'
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          /> */}
          <Routes>
            <Route path="/" element={<News key="general" pageSize={6} category="general" />}></Route>
            <Route path="/Entertainment" element={<News key="entertainment" pageSize={6} category="entertainment" />}></Route>
            <Route path="/Sports" element={<News key="sports" pageSize={6} category="sports" />}></Route>
            <Route path="/Health" element={<News key="health" pageSize={6} category="health" />}></Route>
            <Route path="/Business" element={<News key="business" pageSize={6} category="business" />}></Route>
            <Route path="/Science" element={<News key="science" pageSize={6} category="science" />}></Route>
            <Route path="/Technology" element={<News key="technology" pageSize={6} category="technology" />}></Route>
          </Routes>
        </Router>
      </>
    )
  };
}

export default App;
