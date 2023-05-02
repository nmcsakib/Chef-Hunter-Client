import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';

const Login = () => {

    const {logIn, googleSignIn} = useContext(AuthContext);
    const location = useLocation()
    
    const navigate = useNavigate()
    const handelUserLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password).then(res => {
            console.log(res.user)
            navigate(location.state?.from?.pathname || '/')
        }).catch(err => console.log(err))

    }
    const handelGoogle = () => {
        googleSignIn().then(() => {}).catch(err => console.log(err))
    }

    return (
        <div>
           
<section className="flex flex-col md:flex-row h-screen items-center">

  <div className=" hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
    <img src="https://media.istockphoto.com/id/1176594977/photo/grinding-black-pepper-over-pasta.jpg?s=612x612&w=0&k=20&c=GWFrb6lN-mqOh3dWEBUkQxpsuoOFuUPDWOwN5caPjsc=" alt="" className="w-full h-full object-cover blur-sm "/>
  </div>

  <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center">

    <div className="w-full h-100">


      <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>

      <form onSubmit={handelUserLogin} className="mt-6">
        <div>
          <label className="block text-gray-700">Email Address</label>
          <input type="email" name="" id="" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required/>
        </div>

        <div className="mt-4">
          <label className="block text-gray-700">Password</label>
          <input type="password" name="" id="" placeholder="Enter Password" minlength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none" required/>
        </div>

        <div className="text-right mt-2">
          <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
        </div>

        <button type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6">Log In</button>
      </form>

      <hr className="my-6 border-gray-300 w-full"/>

      <button onClick={handelGoogle} type="button" className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
            <div className="flex items-center justify-center">
           <FaGoogle/>
            <span className="ml-4">
            Log in
            with
            Google</span>
            </div>
          </button>
      <button type="button" className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
            <div className="flex items-center justify-center">
           <FaGithub/>
            <span className="ml-4">
            Log in
            with
            Github</span>
            </div>
          </button>

      <p className="mt-8">Need an account? <Link to="/register" className="text-blue-500 hover:text-blue-700 font-semibold">Create an
              account</Link></p>


    </div>
  </div>

</section>
        </div>
    );
};

export default Login;