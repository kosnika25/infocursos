import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // ✅ Certo: estamos importando o componente que contém o <HashRouter>
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App /> {/* ✅ Certo: App inclui o HashRouter, então os hooks funcionarão */}
  </React.StrictMode>
);

reportWebVitals();
