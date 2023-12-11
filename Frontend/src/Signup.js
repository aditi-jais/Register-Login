import React, { useState } from 'react';
import Validation from "./SignupValidation"

function Signup(){

    const [valuess,setValues]=useState({
        username: "",
        email: "",
        password: "",
        confirmpassword: ""
    })
    const handleInput=(event)=>{
        setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));

    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        (Validation(valuess));
    }


    return(
        <div className="container">
        <div className="form-box">
          <h2 id="register">Sign Up</h2>
          <hr className="line"/>
          <form id="registrationForm" onSubmit={handleSubmit}>
            <div className="input-container">
              <div className="input-label">
                <label htmlFor="username">Username</label>
              </div>

              <div className="input-field">
                <input type="text" placeholder="Username" name='username' onChange={handleInput} />
              </div>
            </div>

            <div className="input-container">
              <div className="input-label">
                <label htmlFor="email">Email</label>
              </div> 
            

              <div className="input-field">
                <input type="email" placeholder="Email" name='email' onChange={handleInput} />
              </div>
            </div>

            <div className="input-container">
              <div className="input-label">
                <label htmlFor="password">Password</label>
              </div>
              
              <div className="input-field">
                <input type="password" placeholder="Password" name='password' onChange={handleInput} />
              </div>
            </div>

            
            <div className="input-container">
              <div className="input-label">
                <label htmlFor="confirmPassword">Confirm Password</label>
              </div>

              <div className="input-field">
                <input type="password" placeholder="Confirm Password" name='confirmPassword' onChange={handleInput} />
              </div>
            </div>
            
            <button className="button" type="submit">Sign Up</button>

            <p>Already have an account? <a href="/" target="_self">Click here to Login</a></p>
          </form>
        </div>
      </div> 
    )
}
export default Signup;