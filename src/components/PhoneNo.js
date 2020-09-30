import React, { useState } from "react";
import "./PhoneNo.css";
import Card from "./UI/Card";
import logo from "../assets/logo.png";
const PhoneNo = (props) => {
    console.log(props)
    return (
        <div>
        <div class="ui menu">
        <div class="header item">
          Register
        </div>
        </div>
       
    <div className="PhoneNo">
  

   
        <img src={logo} style={{ height: "20vh", width: "auto",marginBottom:"3rem",marginTop:"3rem"}} />
        <div className="heading">Welcome To fastor</div>
        <div className='sub-heading'>Enter your number to continue</div>
        <div className="ui small input">
          <input type="number" placeholder="Mobile Number" style={{marginBottom:"5vh"}} />
        </div>
        <button onClick={()=>props.history.push('/otp')}  class="ui primary button">Next</button>
      
    </div>
    </div>
  );
};

export default PhoneNo;
