import React from 'react';
import { render } from 'react-dom';
import HeaderTop from './HeaderTop'
import './style.css';


const App = () => (
  <main>
    <HeaderTop />
  </main>
)

render(<App />, document.querySelector('#root'));

