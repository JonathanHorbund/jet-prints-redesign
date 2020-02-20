import React from 'react';
import SocialMedia from './SocialMedia'
import Cart from './Cart'

let cartCount = {numItems: "0", cat: "cart-container", source: "https://image.flaticon.com/icons/svg/1170/1170678.svg", name: "cart-icon", desc: "Shopping Cart", textName: "cart-num-items"}

const HeaderTop = () => {
  return (
    <section>
      <SocialMedia />
      <Cart {...cartCount}/>
    </section>
  )
}


export default HeaderTop;