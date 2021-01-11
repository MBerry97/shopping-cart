import React from 'react';
import PriceDisplay from './PriceDisplay'
import ItemToBePurchased from './ItemToBePurchased'
import Discount from './Discount'
import {Spring} from 'react-spring/renderprops'
import {connect} from 'react-redux'


const ShoppingCart = (props) => {
  return (
    <Spring
    from={{opacity: 0, marginLeft: -500}}
    to={{opacity: 1, marginLeft: 0}}
    config={{delay: 600}}
    >
     {style => (
       <div style={style}>
       <div className='ShoppingCart'>
      <PriceDisplay initialPrice={props.price} discount={props.discount} total={props.total} returnHome={props.onReturnHome}/>
      <ItemToBePurchased  initialPrice={props.price} itemName={props.itemName} itemImage={props.itemImage}/>
      <Discount discountItem={props.onDiscountedPrice} invalidCodeDispatch={props.onInvalidCode} message={props.message}/>
    </div>
       </div>
     )}
    </Spring>
    
  );
}


//configue which information we need from the reducers state
const mapStatetoProps = (state) => {
  return {
    price: state.price,
    discount: state.discount,
    total: state.total,
    message: state.message,
    itemName: state.itemName,
    itemImage: state.itemImage
  }
}


//configure dispatch actions we can send to the reducer and also pass as a prop
const mapDispatchtoProps = (dispatch) => {
  return {
    onDiscountedPrice: () => dispatch({type: 'DISCOUNT'}),
    onInvalidCode: () => dispatch({type: 'INV_CODE'}),
    onReturnHome: () => dispatch({type: 'RETURN_HOME'})
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(ShoppingCart);