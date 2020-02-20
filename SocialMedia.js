import React from 'react';
import Icon from './Icon';

const socialMediaArr = [
  {source: "https://image.flaticon.com/icons/svg/1051/1051382.svg", cat: "social-media-icon", name: "twitter-icon", alt: "Twitter Logo" }

]

const SocialMedia = () => {
  return (
    <section>
      {socialMediaArr.map(item => {
        return <Icon {...item} />
        })}
    </section>
  )
}


export default SocialMedia;
