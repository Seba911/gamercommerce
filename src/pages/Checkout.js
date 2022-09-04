import * as React from 'react';
import Cart from '../components/Cart/Cart';

const CheckOut = () => {

    return (
        <div className='my-5 d-flex justify-content-center align-items-center' style={{minHeight:"80vh"}}>
            <div className='w-100'>
            <h1 className="text-white">Checkout</h1>
            <Cart />
            </div>
                
        </div>
    )
}
export default CheckOut