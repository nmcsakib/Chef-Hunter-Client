import React, { useContext } from 'react';
import { Link, NavLink, Navigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)
  const handelLogOut = () => {
    logOut().then(() => {
      <Navigate to="/"/>
    }).catch(err => console.log(err))
}
    return (
        <nav className="navbar py-0 fixed backdrop-blur-md top-0 z-20">
        <div className="navbar-start justify-between md:justify-start flex-row-reverse md:flex-row w-full">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow flex-col bg-base-200 rounded-box w-52">
            <ul className="menu menu-horizontal px-1">
            <li><NavLink className={ ({isActive}) => isActive ? "text-blue-500" : "text-white"} to='/'>Home</NavLink></li>
            <li><NavLink className={ ({isActive}) => isActive ? "text-blue-500" : "text-white"} to='/blog'>Blog</NavLink></li>
          </ul>
          {
              user ?
              <>
              <div className='flex items-center tooltip tooltip-left' data-tip={user.displayName}>
            <label htmlFor="modal-update" tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full " >
          <img src={user.photoURL} />

        </div>
      </label>
            </div>
        <button onClick={handelLogOut} className="btn btn-warning">Logout</button>
              </>
            :
            <NavLink  to="/login"  className={ ({isActive}) => isActive ? "text-blue-500 btn btn-warning" : "text-gray-900 btn btn-warning" } >Login</NavLink>}
          
            </ul>
          </div>
          <Link to="/" className="btn btn-glass normal-case text-xl font-mono bg-gradient-to-br from-blue-400/60 to-blue-600/60">Chef-Hunter</Link>
        </div>
       
       {/* For small devices */}

        <div className="navbar-end hidden md:flex">
             <ul className="menu menu-horizontal px-1">
             <li><NavLink className={ ({isActive}) => isActive ? "text-blue-500" : "text-white"} to='/'>Home</NavLink></li>
            <li><NavLink className={ ({isActive}) => isActive ? "text-blue-500" : "text-white"} to='/blog'>Blog</NavLink></li>
          </ul>
            {
              user ?
              <>
              <div className='flex items-center tooltip tooltip-left' data-tip={user.displayName}>
            <label  htmlFor="modal-update" tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full " >
          <img src={user.photoURL} />

        </div>
      </label>
            </div>
        <button onClick={handelLogOut} className="btn btn-warning">Logout</button>
              </>
            :
            <NavLink  to="/login"  className={ ({isActive}) => isActive ? "text-blue-500 btn btn-warning" : "text-gray-900 btn btn-warning" } >Login</NavLink>}
        </div>
        
        {/* For small devices */}


      
      </nav>
    );
};

export default Navbar;