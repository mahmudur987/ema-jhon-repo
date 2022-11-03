import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import './Cart.css'
import { Link } from 'react-router-dom';
const Cart = (props) => {
    const { cart, clearCart, children } = props;
    console.log(children)
    let Total = 0;
    let shiping = 0;
    let quantity = 0;
    for (const product of cart) {
        Total = Total + product.price * product.quantity;
        shiping = shiping + product.shipping;
        quantity = quantity + product.quantity
    }
    const Tax = (Total * 10 / 100).toFixed(2);
    const grandTotal = Total + shiping + parseFloat(Tax);
    return (
        <div className='Cart'>
            <h2>Order summary  </h2>
            <p>selected Item :{quantity}</p>
            <p>Total Price :$ {Total}</p>
            <p>Total Shiping :$ {shiping}</p>
            <p> Tax :$ {Tax}</p>
            <h3>Grand Total : {grandTotal.toFixed(2)}</h3>
            <button onClick={clearCart} className='btn-clearcart'>Clear cart <FontAwesomeIcon icon={faTrash} ></FontAwesomeIcon> </button>
            <Link to={'/order'}>
                <button className='btn-review-order'>review Order  <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon></button>
            </Link>
            {children}
        </div>
    );
};

export default Cart;