import React from 'react';

const Cart = ({ cart }) => {

    let totalPrice = 0;
    let totalShipping = 0;
    let totalQuantity = 0;
    for (const product of cart) {
        // product.quantity = product.quantity || 1;
        totalQuantity = totalQuantity + product.quantity;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping * product.quantity;
    }

    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='font-semibold'>
            <h1 className='text-[#F05941] text-xl font-bold text-center mb-5'>Order Summary</h1>
            <div className='space-y-3 text-[#F05941] '>
                <p>Selected Item: {totalQuantity}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge: ${totalShipping}</p>
                <p>Tax: ${tax}</p>
                <h6 className='font-bold text-lg'>Grand Total: ${grandTotal}</h6>
            </div>
        </div>
    )
}
export default Cart;