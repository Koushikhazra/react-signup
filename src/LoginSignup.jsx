import React, { useState } from "react";
import './Lsu.css'
import user_icon from './Asets/person.png'
import user_password from './Asets/password.png'
import user_email from './Asets/email.png'
const LoginSignup =() =>{
    const [Action, setAction]=useState("signup");
    return (
        <div className="container">
            <div className="header">
                <div className="text">{Action}</div>
                <div className="underline"></div>
            </div>
        <div className="inputs">
            {Action==="Login" ? <div></div> :  <div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder="Name" />
            </div>}
           
            <div className="input">
                <img src={user_email} alt="" />
                <input type="email" placeholder="Email Id" />
            </div>
            <div className="input">
                <img src={user_password} alt="" />
                <input type="password" placeholder="Password"/>
            </div>
        </div>
        {Action==="signup"?<div/>: <div className="forgot-password">Forgot-password ?   <span>Click Here!</span></div>  }
       
        <div className="submit-container">
        <div className={Action==="Login" ? "submit gray":"submit"} onClick={()=>setAction("signup")}>sign up</div>
        <div className={Action==="signup" ? "submit gray":"submit"} onClick={()=>setAction("Login")}> Login </div>
        </div>
        </div>
    )
}
export default LoginSignup