import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
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
        </div>
    );
};

export default Cart;