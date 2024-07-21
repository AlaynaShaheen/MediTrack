import React from 'react';
import loginimg from '../images/loginimg.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaApple, FaChevronLeft } from 'react-icons/fa';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const role = params.get('role');
  console.log('Role:', role);

  return (
    <div className="flex h-screen gap-7">
      <div className="w-1/2 bg-white flex flex-col mt-4 ml-6">
        <div className="flex flex-row">
          <button className="text-gray-600 focus:outline-none" onClick={() => navigate('/')}>
            <FaChevronLeft className="h-24 w-6" />
          </button>
          <h2 className="text-[#696969] text-4xl font-medium mt-7 ml-4">{role} SIGNUP</h2>
        </div>
        <h2 className="text-4xl font-medium mb-3">Sign up</h2>
        <div className="w-3/4">
        <input
            type="text"
            placeholder="NAME"
            className="border border-black border-2 rounded px-4 py-3 mb-4 w-full"
          />
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
          <div className="flex items-center justify-center mt-3 mb-5 text-3xl font-medium text-black">OR</div>
          <button className="bg-white border border-[#63C625] border-2 text-black font-bold py-3 px-4 rounded w-full mb-2 flex">
            <FcGoogle className="text-blue w-7 h-7 ml-3 mr-6" />
            Sign in with Google
          </button>
          <button className="bg-white border border-[#63C625] border-2 text-black font-bold py-3 px-4 rounded w-full mb-2 flex">
            <FaFacebook className="w-7 h-7 ml-3 mr-6" style={{ color: '#3b5998' }} />
            Sign in with Facebook
          </button>
          <button className="bg-white border border-[#63C625] border-2 text-black font-bold py-3 px-4 rounded w-full flex">
            <FaApple className="w-7 h-7 ml-3 mr-6" />
            Sign in with Apple
          </button>
        </div>
      </div>
      <div className="w-1/2 bg-[#63C625]">
        <div className="flex flex-col items-center justify-center mt-10">
          <img src={loginimg} className="mt-10" alt="Login" />
          <h1 className="text-5xl font-medium text-gray-900 mb-4">HELLO USER!!</h1>
          <p className="text-2xl flex flex-col font-medium text-black mb-4 items-center justify-center">
            <span>Already have an account?</span>
          </p>
          <button
            className="bg-white text-[#63C625] font-semibold text-2xl py-3 px-7 rounded-2xl"
            onClick={() => navigate(`/login?role=${role ? role.toUpperCase() : ''}`)}
          >
            {/* {role === 'pharma' ? 'Pharma' : 'User'}*/} LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
