import React from 'react';
import SocialMedia from './SocialMedia'
import Cart from './Cart'
import SignIn from './SignIn'

let cartCount = {numItems: "0"}

const HeaderTop = () => {
  return (
    <section class="header-top">
      <SocialMedia />
      <section id="header-rhs">
        <SignIn />
        <Cart {...cartCount}/>
      </section>
    </section>
  )
}


export default HeaderTop;