import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyA8s8flaoJaQC5p1TwPXR7Spn4UoQ2Xhgg",
  authDomain: "tienda-bebe-28382.firebaseapp.com",
  projectId: "tienda-bebe-28382",
  storageBucket: "tienda-bebe-28382.appspot.com",
  messagingSenderId: "578474161791",
  appId: "1:578474161791:web:3f10a1fcae67c2c47ef14a"
};


initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
