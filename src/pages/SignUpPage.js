import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import BigheadersFile from '../components/BigheadersFile';
import axios from 'axios';

// Sign Up as well as Login page

// Sign Up functionality related javascript
function SignUpPage() {

    const navigate = useNavigate();

    const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
});

const[errors, setErrors] = useState({});

const handleInput = (event) =>
{
    setValues((prev) => ({...prev, [event.target.name]: event.target.value}));
};

const handleSubmit = async (event) =>
{
    event.preventDefault();
    // setErrors(Validation(values));
    console.log(values);

    try {
      const response = await axios.post('http://localhost:5000/api/CreateUser', {
        name: values.name,
        email: values.email,
        password: values.password
      });
      console.log("successful");
      //give the file name after api
      
    } catch (error) {
        console.error('Error creating user:', error);
      
    }
};


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

    {/* IIIIINNNNNNNN */}
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
{/* IIIIINNNNNNNN */}





  {/* Sign Up Form */}
  <div className="sub-cont">
    <div className="img">
      {/* <div className="img__text m--up"> */}
        {/* <h3>Don't have an account? Please Sign up!</h3><h3> */}
        {/* </h3></div> */}
      <div className="img__text m--in">
        <h3>If you already have an account, just sign in.</h3><h3>
        </h3></div>
      <div className="img__btn">
        {/* <span className="m--up">Sign Up</span> */}
        <span className="m--in">Sign In</span>
      </div>
    </div>

    
    <div className="form sign-up">
      <h2>Create your Account</h2>
      <label>

        <span>Name</span>
        <input type="text" placeholder='Enter your Name' name='name' 
         onChange={handleInput} className='form-control rounded-0'/>
         {errors.name && <span className='text-danger'>{errors.name}</span>}
      
      </label>
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

      <button type="button" className="submit" onClick={handleSubmit} style={{ display: 'block', margin: 'auto' }}>Sign Up</button> 
      {/* add onclick btn here, dont add brackets */}
    </div>
  </div>
</div>
</>
  )
}

export default SignUpPage
