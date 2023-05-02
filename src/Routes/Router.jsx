import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Layouts/Main";
import Home from "../Components/Layouts/Home";
import ChefRecipes from "../Components/Layouts/ChefRecipes";
import ErrorPage from "../Components/Pages/Error/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <ErrorPage/>,
        loader: () => fetch('http://localhost:3000/chef-details'),
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