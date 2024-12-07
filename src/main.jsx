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
import ErrorPage from './ErrorPage';

const fetchProducts = async () => {
  try {
    const response = await fetch('/productData.json');
    return await response.json();
  } catch (error) {
    console.error('Error fetching product data:', error);
  }
}


const router = createBrowserRouter([
  {
  
    path: "/",
    element: <Home></Home>,
    errorElement:<ErrorPage></ErrorPage>,
    loader: async () => {
      const response = await fetch('/catagoryesData.json');
      return response.json();
    },
    children: [
      {
        path: '/',
        element: <ProductCart></ProductCart>,
        loader: fetchProducts
      },
      {
        path: '/category/:category',
        element: <ProductCart></ProductCart>,
        loader: fetchProducts,
      }
    ]
  },
  {
    path: '/ststistics',
    element: <Ststistics></Ststistics>,
    loader: fetchProducts
  },
  {
    path: '/dashbord',
    element: <DashBord></DashBord>,
   // loader:()=>fetch('productData.json')
    
  },
  {
    path:'/product/:product_id',
    element:<ProductDetails></ProductDetails>,
    loader: fetchProducts
  },
  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)