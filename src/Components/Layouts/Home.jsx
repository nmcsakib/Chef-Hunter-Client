import React from 'react';
import banner from '../../assets/banner.jpg'

const Home = () => {
    return (
        <div>
            <img className='w-full h-screen' src={banner} alt="" />
            <div className='w-full h-full bg-black/50 absolute top-0'></div>
           
        </div>
    );
};

export default Home;