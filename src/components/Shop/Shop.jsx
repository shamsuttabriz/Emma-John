import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

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
                <div className='w-[20%] hidden lg:block bg-slate-300 ml-5'>
                    <div className=''>
                        <h1 className='text-[#F05941] text-lg font-bold '>Order Summary</h1>
                        <p>Selected Item: {cart.length}</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Shop;