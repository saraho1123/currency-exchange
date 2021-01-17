import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App.js';
import { BrowserRouter } from 'react-router-dom'


const router = <BrowserRouter basename='/currency-exchange'>
  <App />
</BrowserRouter>

ReactDOM.render(router, document.getElementById('root'));
