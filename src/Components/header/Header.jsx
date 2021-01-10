import React from 'react';
import AnimAddShoppingCart from '../animations/AnimAddShoppingCart';
import AnimShoppingCart from '../animations/AnimShoppingCart';
import './Header.css'
import {connect} from 'react-redux'

const Header = (props) => {

  return (
    <div className='header-container'>
      <span>SHOP</span>
      {props.checkout ? <AnimAddShoppingCart /> : <AnimShoppingCart />}
    </div>
  );
}



const mapStatetoProps = (state) => {
  return {
    checkout: state.checkout
  }
}


const mapDispatchtoProps = (dispatch) => {
  return {
    onDisplayItems: (items) => dispatch({type: 'GET_ITEMS', value: items}),
    onItemClick: (item) => dispatch({type: 'ADD_ITEM_TO_BASKET', value: item})
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Header);