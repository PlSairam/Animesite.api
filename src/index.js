import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HeaderBar from './HeaderBar';
import reportWebVitals from './reportWebVitals';
import Sectionbar from './Sectionbar';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
       <HeaderBar/>
       <Sectionbar/>
     </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
