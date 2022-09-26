
import './product.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {

    const { handleAddToCart, product } = props
    const { name, img, price, seller, ratings } = product;
    // const { id, category, name, img, price, quantity, ratings, seller } = props.product;
    // console.log(props.product)
    return (
        <div className='product'>
            <img src={img ? img : 'image not found'} alt=" no img found" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price : $ {price}</p>
                <p> <small>Seller : {seller}</small></p>
                <p>  <small>  raiting : {ratings} stars</small></p>
            </div>
            <button className='btn-cart'>
                <p onClick={() => handleAddToCart(product)}>Add To Cart   <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p>

            </button>
        </div>
    );
};

export default Product;