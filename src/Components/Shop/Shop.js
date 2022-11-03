import React, { useEffect, useState } from 'react';

import { useLoaderData, Link } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {

    const products = useLoaderData();



    const [cart, SetCart] = useState([])
    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            }
        }
        SetCart(savedCart)

    }, [products])

    const handleAddToCart = (Selectedproduct) => {
        console.log(Selectedproduct);
        let newCart = [];
        const exist = cart.find(product => product.id === Selectedproduct.id)
        if (!exist) {
            Selectedproduct.quantity = 1;
            newCart = [...cart, Selectedproduct];
        }
        else {
            const rest = cart.filter(product => product.id !== Selectedproduct.id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist]
        }


        SetCart(newCart);
        addToDb(Selectedproduct.id)

    }

    const clearCart = () => {
        SetCart([]);
        deleteShoppingCart()
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
                <Cart clearCart={clearCart} cart={cart}>



                </Cart>

            </div>

        </div>
    );
};

export default Shop;