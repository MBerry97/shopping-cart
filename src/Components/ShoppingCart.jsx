import React from 'react';
import PriceDisplay from './PriceDisplay'
import ItemToBePurchased from './ItemToBePurchased'
import Discount from './Discount'
import {connect} from 'react-redux'


function ShoppingCart(props) {
  return (
    <div className='ShoppingCart'>
      <PriceDisplay initialPrice={props.price}/>
      <ItemToBePurchased />
      <Discount />
    </div>
  );
}


//configue which information we need from the reducers state
const mapStatetoProps = (state) => {
  return {
    price: state.price
  }
}

export default connect(mapStatetoProps)(ShoppingCart);