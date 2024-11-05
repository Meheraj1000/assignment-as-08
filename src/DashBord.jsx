import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { getAllFavorites } from "./utils";
import Cart from "./Cart";
import CartDetails from "./CartDetails";

const DashBord = () => {
    const[prodect,setProdect]=useState([])
    useEffect(()=>{
        const favorites=getAllFavorites()
        setProdect(favorites)
    },[])
    return (
         <>
       <NavBar></NavBar>
       <div>
       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 pt-7">
            {
                prodect.map(product=><CartDetails key={product.product_id} product={product}></CartDetails>)
            }
        </div>

{/*  */}


       </div>
        </>
    );
};

export default DashBord;