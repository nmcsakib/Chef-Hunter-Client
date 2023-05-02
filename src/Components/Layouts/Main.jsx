import React, { createContext } from 'react';
import Navbar from '../Pages/Shared/Navbar';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';

export const ChefDetailsContext = createContext()
const Main = () => {
    const chefDetails = useLoaderData()
    
    return (
        <>
            <ChefDetailsContext.Provider value={chefDetails}>
                <Navbar />
                <Outlet />
                <Footer />
            </ChefDetailsContext.Provider>
        </>
    );
};

export default Main;