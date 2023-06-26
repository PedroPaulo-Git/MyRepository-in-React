import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home'
import Css from '../src/styles/App.module.css'




const App: React.FC = () => {
    <Css/>
    return (
<Router>
      <div>
      <Header/>
      <Home/>
      </div>
</Router>
    );
  };
  export default App;