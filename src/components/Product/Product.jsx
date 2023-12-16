import React from 'react';
import { MdShoppingCart } from "react-icons/md";

const Products = (props) => {
    const { name, img, price, seller, ratings } = props.product;
    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='bg-[#22092C] text-slate-300 rounded-lg relative border-2 border-[#F05941]'>
            <div className='p-2'>
                <div className='bg-slate-300 rounded-lg border-2 border-[#F05941] -rotate-3'>
                    <img className='rounded-lg border-2 border-[#F05941] rotate-6 duration-200' src={img} alt="" />
                </div>
                <p className=' font-bold text-[#F05941] text-lg my-3'>{name}</p>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p className='mt-3 mb-10'>Rating: {ratings} start</p>
            </div>
            <button
                onClick={() => handleAddToCart(props.product)}
                className='text-slate-800 font-semibold w-full bg-[#EBEEEF] hover:bg-[#ff735e] px-3 py-2 rounded-b-md duration-300 absolute bottom-0 flex justify-center item-center border-t-2 border-[#F05941]'
            >
                Add To Cart
                <span className='pl-2 pt-[5px] text-lg'> <MdShoppingCart /></span>
            </button>
        </div >
    )
}

export default Products;