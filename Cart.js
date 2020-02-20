import React from 'react';

const Cart = (props) => {
  return (
    <section class="cart-container">
      <img src="https://www.renvino.com/wp-content/uploads/sites/33/2018/11/cart.png" id="cart-icon" alt="Shopping Cart" />
      <p id="cart-num-items">{props.numItems}</p>
    </section>
  )
}

export default Cart;