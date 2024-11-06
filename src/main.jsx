import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Toaster } from 'react-hot-toast';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import Ststistics from './Ststistics';
import DashBord from './DashBord';
import ProductCart from './ProductCart';
import ProductDetails from './ProductDetails';
import DashbortCard from './DashbortCard';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader:()=>fetch('catagoryesData.json'),
    children:[
      {
        path:'/',
        element:<ProductCart></ProductCart>,
        loader:()=>fetch('productData.json')
      },
      {
        path:'/category/:category',
        element:<ProductCart></ProductCart>,
        loader:()=>fetch('productData.json')
      }
    ]
  },
  {
    path: '/ststistics',
    element: <Ststistics></Ststistics>
  },
  {
    path: '/dashbord',
    element: <DashBord></DashBord>
  },
  {
    path:'/product/:product_id',
    element:<ProductDetails></ProductDetails>,
    loader:()=>fetch('productData.json')
  },
  {
    path:'/dashbordcard',
    element:<DashbortCard></DashbortCard>
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
