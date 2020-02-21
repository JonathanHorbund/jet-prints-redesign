import React from 'react';
import SocialMedia from './SocialMedia'
import Cart from './Cart'
import SignIn from './SignIn'
import SiteSearchBar from './SiteSearchBar'

let cartCount = {numItems: "0"}

const HeaderTop = () => {
  return (
    <section className="header-top">
      <SocialMedia />
      <SiteSearchBar />
      <section id="header-rhs">
        <SignIn />
        <Cart {...cartCount}/>
      </section>
    </section>
  )
}


export default HeaderTop;