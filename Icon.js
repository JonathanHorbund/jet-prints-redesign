import React from 'react';

const Icon = (props) => {
  return (<img src={props.source} className={props.cat} id={props.name} alt={props.alt} />)
}

export default Icon;