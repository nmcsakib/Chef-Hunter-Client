import React, { useContext, useState } from 'react';
import { FaExclamation} from 'react-icons/fa';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';

const Register = () => {
  const [err, setErr] = useState('');
  const {createUser, update} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const handelUserRegister = (e) => {
      e.preventDefault()
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      const name = form.name.value;
      const photo = form.photo.value || "https://brur.ac.bd/wp-content/uploads/2019/03/male.jpg";
      createUser(email, password).then(res => {
          update({displayName: name, photoURL: photo}).then((res) => {}).catch(err => setErr(err?.message))
          navigate(location.state?.from?.pathname || '/') 
      }).catch(err => err => setErr(err?.message))
    }
   
    return (
        <div>
           
<section className="flex flex-col md:flex-row-reverse items-center ">

  <div className=" hidden lg:block w-full md:w-1/2 xl:w-2/3 py-10">
    <img src="https://media.istockphoto.com/id/1176594977/photo/grinding-black-pepper-over-pasta.jpg?s=612x612&w=0&k=20&c=GWFrb6lN-mqOh3dWEBUkQxpsuoOFuUPDWOwN5caPjsc=" alt="" className="w-full object-cover blur-sm h-screen"/>
  </div>

  <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 px-6 lg:px-16 xl:px-12
        flex items-center justify-center">

    <div className="w-full py-10">


      <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Register to your account</h1>

      <form onSubmit={handelUserRegister} className="mt-6" >
      {
        err !== '' &&
            <div className="border border-red-600 bg-red-200 text-center text-gray-700 flex items-center justify-center">
           <FaExclamation/> <p className="text-md py-5 ">  {err}</p>
        </div>
        } 
        <div>
          <label className="block text-gray-700">Name <sup className="text-red-600">*</sup></label>
          <input type="text" name="name" id="" placeholder="Enter your name" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete required/>
        </div>
        <div  className="mt-4">
          <label className="block text-gray-700">Email Address <sup className="text-red-600">*</sup></label>
          <input type="email" name="email" id="" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoComplete required/>
        </div>
        <div  className="mt-4">
          <label className="block text-gray-700">Photo URL</label>
          <input type="text" name="photo" id="" placeholder="Enter photo url" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"  autoComplete />
        </div>

        <div className="mt-4">
          <label className="block text-gray-700">Password <sup className="text-red-600">*</sup></label>
          <input type="password" name="password" id="" placeholder="Enter Password" minLength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none" required/>
        </div>

        <div className="text-right mt-2">
          <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
        </div>

        <button type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6">Register</button>
      </form>

     

      <p className="mt-8">Already have an account? <Link to="/login" className="text-blue-500 hover:text-blue-700 font-semibold">Login</Link></p>


    </div>
  </div>

</section>
        </div>
    );
};

export default Register;