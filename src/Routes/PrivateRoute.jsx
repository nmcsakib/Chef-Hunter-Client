import React, { createContext, useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLoaderData, useLocation } from 'react-router-dom';

export const RecipesContext = createContext()

const PrivateRoute = ({children}) => {
    const recipes = useLoaderData()
    const location = useLocation()
   const state = location.state;
    const {user, loading} = useContext(AuthContext)
    console.log(state);
    
    if(loading){
        return <div className="flex justify-center mt-20"><progress className="progress w-56"></progress></div>
    }
    if(user){
       return <RecipesContext.Provider value={recipes}>
        {children}
       </RecipesContext.Provider>
    }
    return <Navigate to="/login" replace state={{from: location}}/>
};

export default PrivateRoute;