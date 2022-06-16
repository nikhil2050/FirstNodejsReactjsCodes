import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppPracticalReact from './AppPracticalReact';
import HomeComponent from './components/Reactjs101_SubmitForm/HomeComponent'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <AppPracticalReact /> */}
    {/* <HomeComponent /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
