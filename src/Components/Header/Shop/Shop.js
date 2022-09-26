import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Product from '../../Product/Product';
import './Shop.css'
const Shop = () => {

    const [products, SetProducts] = useState([]);
    const [cart, SetCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => SetProducts(data))
    }, [])


    const handleAddToCart = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        SetCart(newCart);
    }
    return (
        <div className='shop-container'>

            <div className='product-container' >
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>

            <div className='cart-container'>
                <Cart cart={cart}></Cart>

            </div>

        </div>
    );
};

export default Shop;