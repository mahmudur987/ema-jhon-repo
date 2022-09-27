import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../../utilities/fakedb';
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