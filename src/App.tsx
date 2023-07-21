import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet} from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import Skillsets from './components/skillsets'
import Contact from './components/contact';
import Css from '../src/styles/App.module.css'





const App: React.FC = () => {
   

    <Css/>
    return (

      <div>
         <Header/>   
          <Home />
          <Skillsets/>
          <Contact/>
      </div>

    );
  };
  export default App;