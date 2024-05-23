import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import { StoreContextProvider } from "./context/StoreContext";
import Parse from 'parse/dist/parse.min.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
Parse.initialize(
  "se2hrDVab4ZGXuVlYSzcfUz8EVTb4mUlJWJZZcKq",
  "MMbmWX42XHP104JUNtVcMksl9EnlUTdlkcYIOnEK"
);
Parse.serverURL="https://parseapi.back4app.com/classes/Food";
root.render(
  <Router>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </Router>
);

reportWebVitals();