import './App.css';
import ShoppingCart from './Components/ShoppingCart'
import Displayitems from './Components/DisplayItems'

import {Router}from '@reach/router'
import Header from './Components/header/Header';

function App() {
  return (
  <div>
    <Header />
    <div className="App">
      
      <Router>
      <Displayitems path='/'/>
      <ShoppingCart path='/checkout'/>
      </Router>
    </div>
    </div>
  );
}

export default App;
