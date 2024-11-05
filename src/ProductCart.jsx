import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Cart from "./Cart";
import { useEffect, useState } from "react";


const ProductCart = () => {
    const navigate=useNavigate()
    const data=useLoaderData()
    const {category}=useParams()

    const [product,setProduct]=useState([])
    useEffect(()=>{
        if(category){
            const filtercallByCategory=[...data].filter(
                product=>product.category==category)
                setProduct(filtercallByCategory)
        }
        else{
           setProduct(data) 
        }
    },[category,data])
    return (
       <>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 pt-7">
            {
                product.map(product=><Cart key={product.product_id} product={product}></Cart>)
            }
        </div>
        <button className="btn " onClick={()=>setProduct(data)}>View All</button>
       </>
    );
};

export default ProductCart;