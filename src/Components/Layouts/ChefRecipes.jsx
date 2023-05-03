import React, { useContext, useState } from 'react';
import { useLoaderData, useLocation, useParams } from 'react-router-dom';
import { ChefDetailsContext } from './Main';
import { FaHeart, FaRegHeart, FaThumbsUp } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Toaster, toast } from 'react-hot-toast';
import { RecipesContext } from '../../Routes/PrivateRoute';
const ChefRecipes = () => {
  const chefDetail = useContext(ChefDetailsContext);
  const recipes = useContext(RecipesContext);
  const [favorite, setFavorite] = useState(false);
  const {id} = useParams()
  const recipe = recipes.find(n => n.chef_id == id)
  console.log(id, recipe);
    const chef = chefDetail.find(chef => chef.id == id);
    const {name, chefPicture, bio, numRecipes, numLikes, yearsOfExperience} = chef;
  
    const handelFavorite = () => {
 toast('Added to favorite 🔥');
 let not = !favorite;
     setFavorite(not)
    }
   
    return (
        <div className='mt-0'>
{/* <div className="hero min-h-screen bg-base-200">
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
</div> */}

<div className='flex items-center justify-center min-h-screen from-pink-200 via-slate-300 to-blue-500 bg-gradient-to-br'>
    <div className='w-full py-8 flex flex-row items-center justify-center mx-auto bg-[#FFFBFB] rounded-lg shadow-xl'>
        <div className="flex flex-col md:flex-row w-full md:w-5/6 space-x-0 md:space-x-8">
            <div className="w-full md:w-2/5 flex flex-col items-center justify-center">
                <figure className="w-1/2 md:w-full  rounded-full overflow-hidden">
                    <img src={chefPicture} alt="woman wearing a headwrap and an Africa-shaped earring while smiling"  />
                    </figure>
                
            </div>
            <div className="w-full md:w-3/5 space-y-4 flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center">
                    <h1 className="text-center md:text-left text-2xl font-bold text-gray-900">{name}</h1>
                    <p className="inline text-gray-700 font-normal leading-6 w-full text-base">{bio}</p>
                </div>
                <ul className=" space-x-4 flex flex-row justify-center w-full mb-4">
                    <li className="text-sm text-gray-800"><strong className="text-gray-900">{numRecipes}</strong> Recipes</li>
                  <li className="text-sm text-gray-800"><strong className="text-gray-900"> {numLikes}</strong> Likes</li>
                  <li className="text-sm text-gray-800"> Experience: <strong className="text-gray-900">{yearsOfExperience}Years</strong></li>
                    
                </ul>
                
            </div>
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
        recipe?.recipes?.map((recipe, index) => <tr key={index} className='capitalize'>
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