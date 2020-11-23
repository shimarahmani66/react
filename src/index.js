import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App.js";
import "./index.css"

import 'react-toastify/dist/ReactToastify.css';
var newLang = 'fa';
document.documentElement.lang = newLang; 
ReactDOM.render(<App/>,document.getElementById("root"));