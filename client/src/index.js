import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import { StoreContextProvider } from "./context/StoreContext";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </Router>
);

reportWebVitals();