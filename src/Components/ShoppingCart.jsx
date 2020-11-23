import React from 'react';
import PriceDisplay from './PriceDisplay'
import ItemToBePurchased from './ItemToBePurchased'
import Discount from './Discount'
function ShoppingCart(props) {
  return (
    <div className='ShoppingCart'>
      <PriceDisplay />
      <ItemToBePurchased />
      <Discount />
    </div>
  );
}

export default ShoppingCart;