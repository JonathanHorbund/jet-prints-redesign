import React from 'react';
import { render } from 'react-dom';
import SocialMedia from './SocialMedia'
import './style.css';


const App = () => (
  <main>
    <SocialMedia />
  </main>
)

render(<App />, document.querySelector('#root'));
