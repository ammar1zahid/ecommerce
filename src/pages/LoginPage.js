import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


function LoginPage() {


    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    
    const[errors, setErrors] = useState({})

    const handleInput = (event) =>
    {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit = (event) =>
    {
        event.preventDefault();
        setErrors(Validation(values));
    }

    //visual effects funtionality
    useEffect(() => {
        const handleButtonClick = () => {
          const cont = document.querySelector('.cont');
          cont.classList.toggle('s--signup', !cont.classList.contains('s--signup'));
        };
    
        const imgBtn = document.querySelector('.img__btn');
        if (imgBtn) {
          imgBtn.addEventListener('click', handleButtonClick);
        }

        return () => {
            // Cleanup the event listener on component unmount
            if (imgBtn) {
              imgBtn.removeEventListener('click', handleButtonClick);
            }
          };
        }, []);


        
  return (
    <>
    
        {/* <BigheadersFile /> */}
    
        <div className="cont">
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
  </div>

  <div className="sub-cont">
    <div className="img">
      <div className="img__text m--up"> 
        <h3>Don't have an account? Please Sign up!</h3><h3>
        </h3></div>
        </div>
        </div>
    </>
  )
}

export default LoginPage