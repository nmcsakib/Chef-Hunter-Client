import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Layouts/Main";
import Home from "../Components/Layouts/Home";
import ChefRecipes from "../Components/Layouts/ChefRecipes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: 'chef-recipes/:id',
                element: <ChefRecipes/>
            },
        ]
    }
])
export default router