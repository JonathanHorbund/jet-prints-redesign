import React from 'react';

const Cart = (props) => {
  return (
    <section class="cart-container">
      <img src="https://image.flaticon.com/icons/svg/1170/1170678.svg" id="cart-icon" alt="Shopping Cart" />
      <p id="cart-num-items">{props.numItems}</p>
    </section>
  )
}

export default Cart;