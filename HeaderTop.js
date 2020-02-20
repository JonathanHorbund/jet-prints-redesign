import React from 'react';
import SocialMedia from './SocialMedia'
import Cart from './Cart'

let cartCount = {itemNums: 0}

const HeaderTop = () => {
  return (
    <section>
      <SocialMedia />
      <Cart {...cartCount}/>
    </section>
  )
}


export default HeaderTop;