import React from 'react';
import Icon from './Icon';

const socialMediaArr = [
  {source: "https://housing.virginia.edu/sites/housing.virginia.edu/files/instagram-icon-good.png", cat: "social-media-icon", name: "instagram-icon", alt: "Instagram Logo" },
  {source: "https://www.iconsdb.com/icons/preview/white/twitter-xxl.png", cat: "social-media-icon", name: "twitter-icon", alt: "Twitter Logo" },
  {source: "https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/facebook-icon-18-256.png", cat: "social-media-icon", name: "facebook-icon", alt: "Facebook Logo" },
]

const SocialMedia = () => {
  return (
    <section class = "social-media-icon-container">
      {socialMediaArr.map(item => {
        return <Icon {...item} />
        })}
    </section>
  )
}


export default SocialMedia;
