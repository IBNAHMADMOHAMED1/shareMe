import React from 'react'
// import GoogleLogin from 'react-google-login'
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import shareVideo from '../assets/share.mp4'
import logo from '../assets/logowhite.png'
const Login = () => {
  return (
    <div className="flex justify-start items-center  flex-col  h-screen">
      <div className="relative w-full h-full">
        <video
          className=" w-full h-full object-cover"
          autoPlay loop muted>
          <source src={shareVideo} type="video/mp4" />
        </video>
      </div>
      {/* <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-blackOverlay">
        <div className="flex flex-col items-center justify-center h-full w-full">
        <div className="px-4 ">
          <img src={logo} alt="logo" className="w-32" />
          </div>
          <GoogleLogin
            clientId=""
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                aria-label="Continue with google" role="button" className="  py-3.5 px-4 border rounded-lg border-white flex items-center mt-10 text-white hover:bg-white hover:text-black shadow-2xl">
                <FcGoogle className="text-white text-4xl" /><p
                  className="text-base ui-sans-serif  ml-4 ">Continue with Google</p>
              </button>
            )}
          />
        </div>
      </div> */}
    
    </div>
  )
}

export default Login