/* eslint-disable react/prop-types */


const CartDetails = ({ product }) => {
    const { product_image,category, product_title, price } = product || {}
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
            <img
                src={product_image}
                alt="product" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{product_title}</h2>
            <h2>{category}</h2>
            <p>price:{price}</p>
        </div>
    </div>
    
    );
};

export default CartDetails;