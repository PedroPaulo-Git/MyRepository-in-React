import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Header from './components/header';
import reportWebVitals from './reportWebVitals';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Header/>} />
      </Routes>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
