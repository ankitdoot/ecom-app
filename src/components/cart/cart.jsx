import React from 'react'

import CartComponent from '../cart-component/cart-component';
import './cart.css'

const Cart= ({cartItems}) => {
  const totalMRP = cartItems.reduce((total, item) =>{
    return total + item.product.price;
  }, 0);
  return (
    <div className='cart-container'>
      <div>
        {cartItems.map((cartItem) => {
          return <CartComponent key={cartItem.product.id} cartItem={cartItem}/>
        })}
      </div>
      <div className='carttotal-container'>
        <p className='totalprice'>Total MRP : ₹{totalMRP.toFixed(2)}</p>
        <button className='placeorder-btn'>Place Order</button>
      </div>
    </div>
  )
}

export default Cart;