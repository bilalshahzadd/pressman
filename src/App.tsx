import React from 'react';
import './App.css';
import Header from './components/Header';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class App extends React.Component {

  api = process.env.REACT_APP_NEWS;

  state = {
    progress: 20
  }

  setProgress = (progress: any) => {
    this.setState({ progress: progress });
  }

  render() {
    return (
      <>
        <Router>
          <Header />
          <LoadingBar
            height={2}
            color='#f11946'
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(0)}
          />
          <Routes>
            <Route path="/" element={<News apiKey={this.api} setLoader={this.setProgress} key="general" pageSize={6} category="general" />}></Route>
            <Route path="/Entertainment" element={<News apiKey={this.api} setLoader={this.setProgress} key="entertainment" pageSize={6} category="entertainment" />}></Route>
            <Route path="/Sports" element={<News apiKey={this.api} setLoader={this.setProgress} key="sports" pageSize={6} category="sports" />}></Route>
            <Route path="/Health" element={<News apiKey={this.api} setLoader={this.setProgress} key="health" pageSize={6} category="health" />}></Route>
            <Route path="/Business" element={<News apiKey={this.api} setLoader={this.setProgress} key="business" pageSize={6} category="business" />}></Route>
            <Route path="/Science" element={<News apiKey={this.api} setLoader={this.setProgress} key="science" pageSize={6} category="science" />}></Route>
            <Route path="/Technology" element={<News apiKey={this.api} setLoader={this.setProgress} key="technology" pageSize={6} category="technology" />}></Route>
          </Routes>
        </Router>
      </>
    )
  };
}

export default App;
