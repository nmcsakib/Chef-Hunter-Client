import React, { useContext, useState } from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import { ChefDetailsContext } from './Main';
import { FaHeart, FaRegHeart, FaThumbsUp } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Toaster, toast } from 'react-hot-toast';
const ChefRecipes = () => {
  const [favorite, setFavorite] = useState(false);
    const recipes = useLoaderData()
    const chefDetail = useContext(ChefDetailsContext);
    const location = useLocation()
    const {state} = location;
    console.log(state);
    const chef = chefDetail.find(chef => chef.id == state);
    const {id, name, chefPicture, bio, numRecipes, numLikes, yearsOfExperience} = chef;
    const handelFavorite = () => {
 toast('Added to favorite 🔥');
 let not = !favorite;
     setFavorite(not)
    }
    return (
        <div className='mt-20'>
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={chefPicture} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <div className="flex gap-5 items-center "><h1 className="text-5xl font-bold">{name}</h1>
      <div className="badge badge-secondary"><FaThumbsUp/> {numLikes}+</div></div>
      <p className="py-6">{bio}</p>
      <p>Experience: {yearsOfExperience} years</p>
          <p>Recipes: {numRecipes} </p>
      
    </div>
  </div>
</div>

<div>
<hr className='mb-5' />
<h2 className=" my-10 text-3xl font-bold uppercase tracking-wide">Some recipes of {name}</h2>
<hr className='mb-5' />
<div>
<div className="overflow-x-auto">

    
  <table className=" -z-10 table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th>No.</th>
        <th>Name</th>
        <th>Ingredients</th>
        <th>Cooking Method</th>
        <th>Ratings</th>
        <th>Add to favorite</th>
      </tr>
    </thead>
    <tbody>
     {
        recipes.map(recipe => <tr className='capitalize'>
            <th>{recipe.id}</th>
            <td>{recipe.recipe_name}</td>
            <td>{recipe.ingredients.map((i, index) => <p>{index+1}. {i}</p>)}</td>
            <td>{recipe.cooking_method}</td>
            <td><Rating  style={{ maxWidth: 120 }} readOnly value={recipe.rating} /></td>
            <td><button onClick={handelFavorite}>{favorite ? <FaHeart/> : <FaRegHeart/>}</button></td>
        </tr> )
    }
    </tbody>
  </table>
</div>
</div>
</div>
<Toaster/>
        </div>
    );
};

export default ChefRecipes;