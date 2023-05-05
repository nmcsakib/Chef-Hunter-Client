import React, { createContext, useContext } from 'react';
import Navbar from '../Pages/Shared/Navbar';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import { AuthContext } from '../../Providers/AuthProviders';
import { Toaster, toast } from 'react-hot-toast';
export const ChefDetailsContext = createContext()
const Main = () => {
    const chefDetails = useLoaderData()
    
    const {user, update} = useContext(AuthContext);
    const handelUpdateProfile = (e) => {
        
        const form = e.target;
        const name = form.name.value;
          const photo = form.photo.value;
          user && update({displayName: name, photoURL: photo}).then((res) => {
        }).catch(err => console.log(err))
        toast('Updated profile successfully')
    }
    return (
        <>
            <ChefDetailsContext.Provider value={chefDetails}>
                {/* Modal */}
            <input type="checkbox" id="modal-update" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="modal-update" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    
  <div class="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
      <div class="p-4 sm:p-7">
        <div class="text-center">
        <p class="mt-8 text-sm font-semibold leading-none text-white tracking-tighter lg:text-3xl">Update Profile</p>
        <img
                  src={user?.photoURL} class="flex-shrink-0 object-cover object-center btn- flex w-16 h-16 mr-auto -mb-8 ml-auto rounded-full shadow-xl"/>
              <p class="mt-8 text-xl font-semibold leading-none text-white tracking-tighter lg:text-3xl">{user?.displayName}</p>
              <p class="mt-4 text-sm leading-none text-white tracking-tighter lg:text-3xl">Email: {user?.email}</p>
          
        </div>

        <div class="mt-5">
          <form onSubmit={handelUpdateProfile}>
            <div class="grid gap-y-4">
              <div>
                <label for="name" class="block text-sm font-bold ml-1 mb-2 dark:text-white">Name</label>
                <div class="relative">
                  <input type="name" id="name" name="name" class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" required aria-describedby="name-error"/>
                </div>
                <label for="photo" class="block text-sm font-bold ml-1 mb-2 dark:text-white">Photo Url</label>
                <div class="relative">
                  <input type="photo" id="photo" name="photo" class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" required aria-describedby="photo-error"/>
                </div>
              
              </div>
              <button htmlFor="modal-update" type="submit" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Update profile</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <p class="mt-3 flex justify-center items-center text-center divide-x divide-gray-300 dark:divide-gray-700">
      <a class="pr-3.5 inline-flex items-center gap-x-2 text-sm text-gray-600 decoration-2 hover:underline hover:text-blue-600 dark:text-gray-500 dark:hover:text-gray-200" href="#" target="_blank">
        <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
        </svg>
        View Github
      </a>
      <a class="pl-3 inline-flex items-center gap-x-2 text-sm text-gray-600 decoration-2 hover:underline hover:text-blue-600 dark:text-gray-500 dark:hover:text-gray-200" href="#">
        
        Contact us!
      </a>
    </p>
  </div>
</div>
{/* Modal */}
                <Navbar />
               <main className="min-h-screen">
               <Outlet />
               </main>
                <Footer />
            </ChefDetailsContext.Provider>
            <Toaster/>
        </>
    );
};

export default Main;