import React from 'react';
import SocialMedia from './SocialMedia'
import Cart from './Cart'

let cartCount = {numItems: "0"}

const HeaderTop = () => {
  return (
    <section class="header-top">
      <SocialMedia />
      <Cart {...cartCount}/>
    </section>
  )
}


export default HeaderTop;