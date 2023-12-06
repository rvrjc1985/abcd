import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Class2 from './Styles/style';
import App1 from './Routers/App1.js';
import reportWebVitals from './reportWebVitals';
import MyCalendar from "./Routers/MyCalendar.js";
import StudentFilter from './Routers/StudentFilter.js';
import Calculator from './Routers/Calculator.js';
import LoginForm from './Routers/LoginForm.js';
import CounterApp from './Routers/CounterApp.js';
// import Func1 from './Components/FunctionalComponent';
// import Class1 from './Components/ClassComponent';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CounterApp/>
    <LoginForm/>
    <StudentFilter/>
    {/* <App /> */}
    {/* <Func1/>
    <Class1/> */}
    {/* <Class2/> */}
    <Calculator/>
    <App1/>
    <MyCalendar/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
