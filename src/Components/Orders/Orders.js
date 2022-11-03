import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../reviewItem/ReviewItem';

const Orders = () => {
    const { products, initialCart } = useLoaderData();
    const [cart, SetCart] = useState(initialCart);
    const handleRemoveItem = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        SetCart(remaining);
        removeFromDb(id)
        console.log(remaining)

    }
    const clearCart = () => {
        SetCart([]);
        deleteShoppingCart()
    }
    // console.log(initialCart)
    return (
        <div className='shop-container'>

            <div className='orders-container' >
                {
                    cart.map(product => <ReviewItem key={product.id} product={product} handleRemoveItem={handleRemoveItem}></ReviewItem>)
                }
                {
                    cart.length === 0 && <h1>Nothing to disply  <br />
                        please  <Link to={'/'}>shope more </Link> </h1>
                }
            </div>

            <div className='cart-container'>
                <Cart clearCart={clearCart} cart={cart}>
                    <Link to={"/shipping"}>
                        <button className='btn-review-order'>proceed Shipping</button>

                    </Link>


                </Cart>
            </div>

        </div>
    );
};

export default Orders;