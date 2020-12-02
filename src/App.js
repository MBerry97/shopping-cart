import './App.css';
import ShoppingCart from './Components/ShoppingCart'
import Displayitems from './Components/DisplayItems'
import {Router}from '@reach/router'

function App() {
  return (
    <div className="App">
      <Router>
      <Displayitems path='/'/>
      <ShoppingCart path='/checkout'/>
      </Router>
    </div>
  );
}

export default App;
