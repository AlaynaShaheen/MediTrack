import React from 'react';
import loginimg from '../images/loginimg.png';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import {gapi} from "gapi-script";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import {FaChevronLeft} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
// import LoginButton from '../components/loging';
// import LogoutButton from '../components/logoutg';
// const clientId="712965141500-cdlt80s693m7ehtpcbrm2sfuo4hrjts1.apps.googleusercontent.com";
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const role = params.get('role');
  console.log('Role:', role);
//   useEffect(()=>{
//     function start(){
//       gapi.client.init({
//         clientId:clientId,
//         scope:""
//       })
//     };
//     gapi.load('client:auth2',start);
//   });
  return (
    <div className="flex h-screen gap-7">
      <div className='w-1/2 bg-[#63C625]'>
      <button className="text-gray-600 focus:outline-none ml-4" onClick={() => navigate('/')}>
              <FaChevronLeft className="h-24 w-6" />
            </button>
      <div className="flex flex-col items-center justify-center">
        <img src={loginimg} alt="Login" />
        <h1 className="text-5xl font-medium text-gray-900 mb-4">WELCOME BACK!</h1>
        <p className="text-2xl flex flex-col font-medium text-black mb-4 items-center justify-center">
          <span>Enter your details and start journey</span>
          <span>with us</span>
        </p>
        <button
            className="bg-white text-[#63C625] font-semibold text-2xl py-3 px-7 rounded-2xl"
            onClick={() => navigate(`/signup?role=${role ? role.toUpperCase() : ''}`)}
          >
            {/* {role === 'pharma' ? 'Pharma' : 'User'}*/} SIGNUP 
          </button>
      </div>
      </div>
      <div className="w-1/2 bg-white flex flex-col mt-6">
        <h2 className="text-[#696969] text-4xl font-medium mb-6">{role} LOGIN</h2>
        <h2 className='text-4xl font-medium mb-4'>Login</h2>
        <div className="w-3/4">
          <input
            type="email"
            placeholder="E-MAIL"
            className="border border-black border-2 rounded px-4 py-3 mb-4 w-full"
          />
          <input
            type="password"
            placeholder="PASSWORD"
            className="border border-black border-2 rounded px-4 py-3 mb-4 w-full"
          />
          <button className="bg-[#63C625] text-white font-bold text-xl py-3 px-4 rounded w-full mb-4">CONTINUE</button>
          <div className="flex items-center justify-center MT-6 mb-5 text-2xl font-medium text-black">OR</div>
          <button className="bg-white border border-[#63C625] border-2 text-black font-bold py-3 px-4 rounded w-full mb-2 flex">
            <FcGoogle className="text-blue w-7 h-7 ml-3 mr-6" />
            Sign in with Google
          </button>
          <button className="bg-white border border-[#63C625] border-2 text-black font-bold py-3 px-4 rounded w-full mb-2 flex">
            <FaFacebook className="w-7 h-7 ml-3 mr-6" style={{ color: '#3b5998' }}/>
            Sign in with Facebook
          </button>
          <button className="bg-white border border-[#63C625] border-2 text-black font-bold py-3 px-4 rounded w-full flex">
            <FaApple className="w-7 h-7 ml-3 mr-6" />
            Sign in with Apple
          </button>
        </div>
      </div>

    </div>
        
  );
};

export default Login;
