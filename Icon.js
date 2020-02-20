import React from 'react';

const Icon = (props) => {
  return (<img src={props.name} class={props.cat} id={props.name} alt={props.alt} />)
}

export default Icon;