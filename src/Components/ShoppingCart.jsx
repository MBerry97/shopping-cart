import React from 'react';
import PriceDisplay from './PriceDisplay'
import ItemToBePurchased from './ItemToBePurchased'
import Discount from './Discount'
import {connect} from 'react-redux'


function ShoppingCart(props) {
  return (
    <div className='ShoppingCart'>
      <PriceDisplay initialPrice={props.price} discount={props.discount} total={props.total}/>
      <ItemToBePurchased  />
      <Discount discountItem={props.onDiscountedPrice}/>
    </div>
  );
}


//configue which information we need from the reducers state
const mapStatetoProps = (state) => {
  return {
    price: state.price,
    discount: state.discount,
    total: state.total
  }
}


//configure dispatch actions we can send to the reducer and also pass as a prop
const mapDispatchtoProps = (dispatch) => {
  return {
    onDiscountedPrice: () => dispatch({type: 'DISCOUNT'})
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(ShoppingCart);