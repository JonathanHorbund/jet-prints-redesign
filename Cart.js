import React from 'react';

const Cart = (props) => {
  return (
    <section class="cart-container">
      <img src={props.source} id={props.imgName} alt={props.alt} />
      <p id={props.itemNum}>{props.numItems}</p>
    </section>
  )
}

export default Cart;
