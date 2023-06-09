import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Layouts/Main";
import Home from "../Components/Layouts/Home";
import ChefRecipes from "../Components/Layouts/ChefRecipes";
import ErrorPage from "../Components/Pages/Error/ErrorPage";
import Login from "../Components/Pages/Pages/Login";
import Register from "../Components/Pages/Pages/Register";
import PrivateRoute from "./PrivateRoute";
import Blog from "../Components/Pages/Pages/Blog";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <ErrorPage/>,
        loader: () => fetch('https://chef-hunter-server-nmcsakib.vercel.app/chef-details'),
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/blog',
                element: <Blog/>,
            },
            {
                path: '/login',
                element: <Login/>,
            },
            {
                path: '/register',
                element:<Register/>
            },
            {
                path: 'chef-recipes/:id',
                element: <PrivateRoute><ChefRecipes/></PrivateRoute>,
                loader: ({params}) => fetch(`https://chef-hunter-server-nmcsakib.vercel.app/recipes/${params.id}`)
            },
        ]
    }
])
export default router