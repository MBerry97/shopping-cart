import React from 'react';
import PriceDisplay from './PriceDisplay'
import ItemToBePurchased from './ItemToBePurchased'
function ShoppingCart(props) {
  return (
    <div className='ShoppingCart'>
      <PriceDisplay />
      <ItemToBePurchased />
    </div>
  );
}

export default ShoppingCart;