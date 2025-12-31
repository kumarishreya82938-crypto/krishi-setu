import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routerpage from './Routerpage.js';
import React from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routerpage/>
  </BrowserRouter>
  
);


