import React from 'react';
import Icon from './Icon';

const socialMediaArr = [
  {source: "https://image.flaticon.com/icons/svg/1384/1384031.svg", cat: "social-media-icon", name: "instagram-icon", alt: "Instagram Logo" },
  {source: "https://image.flaticon.com/icons/svg/1051/1051382.svg", cat: "social-media-icon", name: "twitter-icon", alt: "Twitter Logo" },
  {source: "https://image.flaticon.com/icons/svg/1051/1051309.svg", cat: "social-media-icon", name: "facebook-icon", alt: "Facebook Logo" },
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
