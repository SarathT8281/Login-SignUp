import React, { useState } from 'react'
import './LoginSignUp.css'
import { IoPerson } from "react-icons/io5";
import { TbMailFilled } from "react-icons/tb";
import { RiLockPasswordFill } from "react-icons/ri";


function LoginSignUp() {
  const [action, setAction] = useState('Login')
  return (
    <div className='container'>
      <div className="header">
        <h1 className='text'>{action}</h1>
        
      </div>
      <div className="inputs">
      {action === 'Login'? <div> </div>:<div className="input">
          <IoPerson className='icon' />
        <input type="text" placeholder='Name' />
        </div>}
        
        <div className="input">
        <TbMailFilled className='icon' />
        <input type="text" placeholder='Mail ID' />
        </div>
        <div className="input">
        <RiLockPasswordFill className='icon' />
        <input type="text" placeholder='Password' />
        </div>
      </div>
      {action === "Sign Up"? <div></div>:<div className="forgot-password">Lost Password..? <span>Click Here..!</span></div>}
      <div className="submit-container">
        <div className={action==="Login" ?"submit gray" :"submit"} onClick={()=>setAction("Sign Up")}>Sign Up</div>
        <div className={action==="Sign Up" ?"submit gray" :"submit"}onClick={()=>setAction("Login")}>Login</div>
      </div>
    </div>
  )
}

export default LoginSignUp