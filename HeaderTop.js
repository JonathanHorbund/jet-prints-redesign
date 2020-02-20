import React from 'react';
import SocialMedia from './SocialMedia'
import Cart from './Cart'
import SignIn from './SignIn'

let cartCount = {numItems: "0"}

const HeaderTop = () => {
  return (
    <section class="header-top">
      <SocialMedia />
      <SignIn />
      <Cart {...cartCount}/>
    </section>
  )
}


export default HeaderTop;