import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import AppNavbar from './AppNavbar';
// Import the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
   <App />
 </React.StrictMode>
);

/* const name = "Tristan parcon"
const student = {
  firstName: 'Nehemiah',
  lastName: 'Ellorico'
}


function userName(user) {
  return user.firstName + ' ' + user.lastName;
}

const element = <h1> Hello, {userName(student)} </h1>

root.render(element) */

// react is a library for user interface

