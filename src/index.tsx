import React, { Children } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider,BrowserRouter  } from 'react-router-dom';
import Home from './components/home';
import Skillsets from './components/skillsets'
import Contact from './components/contact';


  
ReactDOM.render(
  <React.StrictMode>
<BrowserRouter>
<App/>
</BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
