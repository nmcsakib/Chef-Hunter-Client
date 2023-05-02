import React from 'react';
import {FaThumbsUp} from 'react-icons/fa'
import { Link } from 'react-router-dom';
const ChefCard = ({chefDetail}) => {
    const {id, chefName, chefPicture, numRecipes, numLikes, yearsOfExperience} = chefDetail;
    return (
        <div className="card shadow-xl text-white">
        <figure><img src={chefPicture} alt={chefName} /></figure>
        <div className="card-body bg-white-10 backdrop-blur-lg">
          <h2 className="card-title">
            {chefName}
            <div className="badge badge-secondary"><FaThumbsUp/> {numLikes}+</div>
          </h2>
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