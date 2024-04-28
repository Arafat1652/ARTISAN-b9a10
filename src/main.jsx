import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './pages/Home';
import AuthProvider from './components/AuthProvider/AuthProvider';
import Register from './pages/Register';
import Login from './pages/Login';
import AddCraft from './pages/AddCraft';
import PrivateRoute from './pages/PrivateRoute';
import ViewDetailCraft from './pages/ViewDetailCraft';
import AllCraftItems from './pages/AllCraftItems';
import MyCraftPage from './pages/MyCraftPage';
import UpdateCraft from './pages/UpdateCraft';
import ErrorPage from './pages/ErrorPage';
import ArtCraftDetails from './pages/ArtCraftDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        // loader: ()=>fetch('https://b9a10-ar-02-server.vercel.app/crafts')
      },
      {
        path: '/addCraft',
        element: <PrivateRoute><AddCraft></AddCraft></PrivateRoute>
      },
      {
        path: '/allArt',
        element: <AllCraftItems></AllCraftItems>,
        // loader: ()=>fetch('https://b9a10-ar-02-server.vercel.app/crafts')
      },
      {
        path: '/myCraft',
        element: <PrivateRoute><MyCraftPage></MyCraftPage></PrivateRoute>
      },
    ]
  },
  {
    path: '/register',
    element: <Register></Register>
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/crafts/:id',
    element: <PrivateRoute><ViewDetailCraft></ViewDetailCraft></PrivateRoute>,
    loader: ({params})=>fetch(`https://b9a10-ar-02-server.vercel.app/crafts/${params.id}`)
  },
  {
    path:'/update/:id',
    element: <UpdateCraft></UpdateCraft>
  },
  {
    path: '/artCraft/:subcategoryName',
    element: <PrivateRoute><ArtCraftDetails></ArtCraftDetails></PrivateRoute>,
    loader: ({params}) => fetch(`https://b9a10-ar-02-server.vercel.app/cardItem/${params.subcategoryName}`)
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    <ToastContainer position="top-center" autoClose={2000}/>
  </React.StrictMode>,
)
