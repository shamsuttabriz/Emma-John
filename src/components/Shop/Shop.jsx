import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) => {
        let newCart = [];
        // const newCart = [...cart, product];
        const existing = cart.find(pd => pd.id !== product.id);
        if (!existing) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else {
            existing.quantity = existing.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, existing];
        }
        setCart(newCart);
        addToDb(product.id)
    }

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products]);

    return (
        <div className='w-full text-orange-500'>
            <div className='w-full lg:w-10/12 mx-auto flex py-20'>
                <div className='w-[80%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto'>
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
                <div className='w-[20%] hidden lg:block bg-slate-300 ml-4 rounded-md p-2 sticky top-0'>
                    <Cart cart={cart} />
                </div>
            </div>
        </div >
    )
}

export default Shop;