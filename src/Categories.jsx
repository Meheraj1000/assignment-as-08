/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";


const Categories = ({ categories }) => {
    return (
        <div>
            {
              categories.map(category=><NavLink 
                className={({isActive})=>`btn ${isActive ?'bg-red-600':''}`} key={category.category} 
                to={`/category/${category.category}`} >
                    {category.category}
                    </NavLink>)  
            }

        </div>
    );
};

export default Categories;