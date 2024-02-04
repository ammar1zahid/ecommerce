import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';
import BigheadersFile from '../components/BigheadersFile';
import axios from 'axios';

function SignupandLoginPage() {

    const [isSignUp, setIsSignUp] = useState(false);
    useEffect(() => {
        const handleButtonClick = () => {
          setIsSignUp((prev) => !prev);
        };
    
        const imgBtn = document.querySelector('.img__btn');
        if (imgBtn) {
          imgBtn.addEventListener('click', handleButtonClick);
        }
    
        return () => {
          if (imgBtn) {
            imgBtn.removeEventListener('click', handleButtonClick);
          }
        };
      }, []);
     //visual effects funtionality
    //  useEffect(() => {
    //     const handleButtonClick = () => {
    //       const cont = document.querySelector('.cont');
    //       cont.classList.toggle('s--signup', !cont.classList.contains('s--signup'));
    //     };
    
    //     const imgBtn = document.querySelector('.img__btn');
    //     if (imgBtn) {
    //       imgBtn.addEventListener('click', handleButtonClick);
    //     }

    //     return () => {
    //         // Cleanup the event listener on component unmount
    //         if (imgBtn) {
    //           imgBtn.removeEventListener('click', handleButtonClick);
    //         }
    //       };
    //     }, []);





  return (
    <>
            {/* Display either Sign In or Sign Up form based on the CSS class */}
    <div className="cont">
    
    {isSignUp ? <SignUpForm /> : <LoginForm onToggleSignUp={() => setIsSignUp(true)} />}
        {/* <LoginForm />
        <SignUpForm /> */}
      </div>

    </>
  );
}

export default SignupandLoginPage