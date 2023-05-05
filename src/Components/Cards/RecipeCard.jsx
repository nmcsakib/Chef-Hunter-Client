import { Rating } from '@smastrom/react-rating';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const RecipeCard = ({recipe}) => {
    const [favorite, setFavorite] = useState(false);
    const handelFavorite = () => {
        if(!favorite){
         toast(`${recipe.recipe_name} Added to favorite 🔥`);
        }
        setFavorite(true)
           }
          
    return (
        <tr className='capitalize'>
        <th>{recipe.id}</th>
        <td>{recipe.recipe_name}</td>
        <td>{recipe.ingredients.map((i, index) => <p>{index+1}. {i}</p>)}</td>
        <td>{recipe.cooking_method}</td>
        <td><Rating  style={{ maxWidth: 120 }} readOnly value={recipe.rating} /></td>
        <td> <button onClick={handelFavorite}>{favorite ? <FaHeart/> : <FaRegHeart/>}</button></td>
    </tr>
    );
};

export default RecipeCard;