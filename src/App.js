import React,{useState} from 'react';
import logo from './logo.svg';
import PhoneNo from "./components/PhoneNo"
import {Route,BrowserRouter} from 'react-router-dom'
import './style.css'
import Otp from './components/Otp/Otp'
import PhoneInput from 'react-phone-number-input'
import Home from './components/home/home';
function App() {
  
  const [value, setValue] = useState()
  return (
    <>
    <BrowserRouter>
    <Route component={PhoneNo} exact path="/"/>
    <Route component={Otp} path="/otp"/>
    <Route component={Home} path='/home'/>
    
    </BrowserRouter>
    

    </>
  );
}

export default App;
