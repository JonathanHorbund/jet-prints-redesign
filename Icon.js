import React from 'react';

const Icon = (props) => {
  return (<img src={props.source} className={props.cat} id={props.name} alt={props.alt} />)
}

export default Icon;


function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}
