import React from 'react';
import {FaThumbsUp} from 'react-icons/fa'
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';

const ChefCard = ({chefDetail}) => {
    const {id, name, chefPicture, numRecipes, numLikes, yearsOfExperience} = chefDetail;
    return (
        <div className="card shadow-xl text-white">
       <figure> <LazyLoad offset={100}><img src={chefPicture} alt={name} /></LazyLoad></figure>
        <div className="card-body bg-white-10 backdrop-blur-lg">
          <h2 className="card-title">
            {name}
          </h2>
            <div className="badge badge-secondary"><FaThumbsUp/> {numLikes}+</div>
          <p>Experience: {yearsOfExperience} years</p>
          <p>Recipes: {numRecipes} </p>
          <div className="card-actions justify-end">
      <Link to={`/chef-recipes/${id}`} state={id}><button className="btn btn-info w-full">View Recipes</button></Link>
    </div>
        </div>
      </div>
    );
};

export default ChefCard;