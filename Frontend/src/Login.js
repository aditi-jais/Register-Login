import {Link} from 'react-router-dom'
import React, { useState } from 'react';
import Validation from "./LoginValidation"
function Login(){
    const [values,setValues]=useState({
        email: '',
        password: ''
    })

    const [errors,setErrors]= useState({})
    const handleInput=(event)=>{
        setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));

    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        setErrors(Validation(values));
    }

    return(
        <div className="container">
        <div className="form-box">
          <h2 id="login">Login</h2>
          <hr className="line"/>
          <form id="loginForm" onSubmit={handleSubmit}>

            <div className="input-container">
              <div className="input-label">
                <label htmlFor="loginEmail">Email</label>
              </div>

              <div className="input-field">
                <input type="email" placeholder="Email" onChange={handleInput} name="email"/>
                {errors.email && <span className='text-danger'>{errors.email}</span>}
              </div>
            </div>

            <div className="input-container">
              <div className="input-label">
                <label htmlFor="loginPassword">Password</label>
              </div>

              <div className="input-field">
                <input type="password" placeholder="Password" onChange={handleInput} name="password" />
                {errors.password && <span className='text-danger'>{errors.password}</span>}
              </div>
            </div>

            <button className="button" type="submit">Login</button>
            
            <p>Don't have an account yet? <Link to="/signup">Click here to Sign Up</Link>
            </p>
          </form>
        </div>
      </div>  
    )
}
export default Login;