import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import Validation from './LoginValidation';
import { useNavigate } from 'react-router-dom';


function LoginForm() {

//     // Use the useNavigate hook to get the navigate function
//   const navigate = useNavigate();

//   const handleSignUpClick = () => {
//     // Toggle the signup class on the container element
//     const cont = document.querySelector('.cont');
//     cont.classList.toggle('s--signup', true);

//     // Use the navigate function to navigate to the signup route
//     navigate('/SignUpForm'); };


    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    
    const[errors, setErrors] = useState({})

    const handleInput = (event) =>
    {
        setValues(prev => ({...prev, [event.target.name]: event.target.value}))
    }

    const handleSubmit = (event) =>
    {
        event.preventDefault();
        // setErrors(Validation(values));
    }


  return (
    <>


   


{/* <div className="cont"> */}
  {/* Sign In Form */}
  <div className="form sign-in">
    <h2>Welcome</h2>

    <label>
      <span>Email</span>
      <input type="email" placeholder='Enter your Email' name='email'
      onChange={handleInput} className='form-control rounded-0'/>
      {errors.email && <span className='text-danger'>{errors.email}</span>}
    </label>

    <label>
      <span>Password</span>
      <input type="password" placeholder='Enter your Password' name='password'
      onChange={handleInput} className='form-control rounded-0'/>
      {errors.password && <span className='text-danger'>{errors.password}</span>}
    </label>
    <p className="forgot-pass">Forgot password?</p>
    <button type="button" className="submit" onClick={handleSubmit} style={{ display: 'block', margin: 'auto' }}>Sign In</button>
  </div>

 
  
  <div className="sub-cont">
    <div className="img">
      <div className="img__text m--up">
        <h3>Don't have an account? Please Sign up!</h3><h3>
        </h3></div>
      {/* <div className="img__text m--in">
        <h3>If you already have an account, just sign in.</h3><h3>
        </h3></div>
      <div className="img__btn"> */}
        <span className="m--up">Sign Up</span>
        {/* <span className="m--in">Sign In</span> */}
      </div>
      </div>
    </>
  )
}

export default LoginForm