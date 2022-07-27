import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, HashRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>---关闭严格模式，路由才可正常跳转，否则会出现导航栏显示已跳转但是页面未跳转的情况！！ 
  <BrowserRouter>
    <App />
  </BrowserRouter>
    
  // </React.StrictMode>
);

reportWebVitals();
