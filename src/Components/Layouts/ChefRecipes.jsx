import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { ChefDetailsContext } from './Main';

const ChefRecipes = () => {
    const chefDetail = useContext(ChefDetailsContext);
    const location = useLocation()
    const {state} = location;
    console.log(state);
    const chef = chefDetail.find(chef => chef.id == state);
    const {id, chefName, chefPicture, numRecipes, numLikes, yearsOfExperience} = chef;

    return (
        <div className='mt-20'>
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={chefPicture} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ChefRecipes;