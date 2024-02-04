import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import BigheadersFile from '../components/BigheadersFile';
import axios from 'axios';
// Sign Up as well as Login page

function SignLogPage() {

// Sign Up functionality related javascript
    const navigate = useNavigate();

    const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
});

const[errors, setErrors] = useState({});

const [successMessage, setSuccessMessage] = useState('');
const [errorMessage, setErrorMessage] = useState('');


const handleInput = (event) =>
{
    setValues((prev) => ({...prev, [event.target.name]: event.target.value}));
};

const handleSubmit = async (event) =>
{
    event.preventDefault();
    // setErrors(Validation(values));
    // console.log(values);

    try {
      const response = await axios.post('http://localhost:5000/api/CreateUser', {
        name: values.name,
        email: values.email,
        password: values.password
      });
      console.log("successful");
      //give the file name after api
      setSuccessMessage('Signup successful!'); // Set success message
      setErrorMessage(''); // Clear any previous error message
      
    } catch (error) {
      console.error('Error creating user:', error);
      setErrorMessage('Signup failed. Please try again.'); // Set error message
      setSuccessMessage(''); // Clear any previous success message
      
    }
};
// Sign Up functionality related javascript



// Login functionality related javascript

const [lvalues, setlValues] = useState({
    email: '',
    password: ''
})

const[lerrors, setlErrors] = useState({})

const handleLogInput = (logevent) =>
{
    setlValues(prev => ({...prev, [logevent.target.name]: logevent.target.value}));
}

const handleLogSubmit = async (logevent) =>
{
    logevent.preventDefault();
    // setErrors(Validation(lvalues));

try {
  // Perform login operation

  const response = await axios.post("http://localhost:5000/api/LoginUser", {
    email: lvalues.email,
    password: lvalues.password,
  });
  console.log('Login successful');
  setSuccessMessage('Login successful!'); // Set success message
  setErrorMessage(''); // Clear any previous error message
  navigate('/');
} catch (lerror) {
  console.error('Error during login:', lerror);
  setErrorMessage('Invalid credentials. Please try again.'); // Set error message
  setSuccessMessage(''); // Clear any previous success message
}
};
// Login functionality related javascript


// fetchData(); // Call the async function




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
      onChange={handleLogInput} className='form-control rounded-0'/>
      {lerrors.email && <span className='text-danger'>{lerrors.email}</span>}
    </label>

    <label>
      <span>Password</span>
      <input type="password" placeholder='Enter your Password' name='password'
      onChange={handleLogInput} className='form-control rounded-0'/>
      {lerrors.password && <span className='text-danger'>{lerrors.password}</span>}
    </label>
    <p className="forgot-pass">Forgot password?</p>
    <button type="button" className="submit" onClick={handleLogSubmit} style={{ display: 'block', margin: 'auto' }}>Sign In</button>

    {errorMessage && <div className="error-message">{errorMessage}</div>}
  {successMessage && <div className="success-message">{successMessage}</div>}

  </div>
{/* IIIIINNNNNNNN */}





  {/* Sign Up Form */}
  <div className="sub-cont">
    <div className="img">
      <div className="img__text m--up">
        <h3>Don't have an account? Please Sign up!</h3><h3>
        </h3></div>
      <div className="img__text m--in">
        <h3>If you already have an account, just sign in.</h3><h3>
        </h3></div>
      <div className="img__btn">
        <span className="m--up">Sign Up</span>
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
      {errorMessage && <div className="error-message">{errorMessage}</div>}
  {successMessage && <div className="success-message">{successMessage}</div>}
      {/* add onclick btn here, dont add brackets */}
    </div>
  </div>
</div>
</>
  )
}

export default SignLogPage
