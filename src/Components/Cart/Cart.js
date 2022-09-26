import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    return (
        <div>
            <h2>Order summary  </h2>
            <p>selected Item :{cart.length}</p>
        </div>
    );
};

export default Cart;