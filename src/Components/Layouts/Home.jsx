import React, { useContext } from 'react';
import banner from '../../assets/banner.jpg'
import { FaArrowRight } from 'react-icons/fa';
import { ChefDetailsContext } from './Main';
import ChefCard from '../ChefCard/ChefCard';

const Home = () => {
    const chefDetails = useContext(ChefDetailsContext);
    console.log(chefDetails);
    return (
        <div>
            <img className='w-full h-screen' src={banner} alt="" />
            <div className='w-full h-full bg-gradient-to-t from-black absolute top-0'></div>
           <div className='absolute top-[20%] text-center'>
            <h1 className="text-5xl font-bold uppercase text-white tracking-wide">Apply Today <br />
Seeking Experienced Chef for Fast-Paced Restaurant</h1>
            <p className="tracking-wide text-md mt-5 px-5 font-serif text-white ">there is a highly skilled chef in a particular location or organization who is internationally recognized for their expertise in cooking. This chef has likely received formal training in culinary arts, and may have won awards or recognition for their dishes. Their cuisine is likely to be of exceptional quality, using the best ingredients and showcasing unique techniques and flavors. A world-class master chef is a valuable asset to any restaurant, hotel, or culinary institution and can elevate the reputation and success of their establishment</p>
            <button className="btn btn-warning">Learn More  <FaArrowRight/> </button>
           </div>
           <div className='pt-10 bg-[url("https://media.istockphoto.com/id/1176594977/photo/grinding-black-pepper-over-pasta.jpg?s=612x612&w=0&k=20&c=GWFrb6lN-mqOh3dWEBUkQxpsuoOFuUPDWOwN5caPjsc=")] bg-fixed bg-no-repeat bg-cover bg-center'>

            <h2 className="text-5xl text-center font-bold uppercase tracking-wide bg-gradient-to-r from-yellow-500 via-lime-600 to-pink-500 bg-clip-text text-transparent">Our master chefs</h2>
            <hr className="font-bold text-5xl h-10 mt-5" />
            <div className='grid grid-cols-3 gap-8 px-10 my-5 '>
        {
            chefDetails.map(chefDetail => <ChefCard key={chefDetail.id} chefDetail={chefDetail}></ChefCard>)
        }
            </div>
           </div>
          
        </div>
    );
};

export default Home;