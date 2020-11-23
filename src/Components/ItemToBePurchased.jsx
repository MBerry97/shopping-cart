import React from 'react';
import item from '../assets/DJ-decks.jpg'


function ItemToBePurchased(props) {
  return (
    <div className='ItemToBePurchased-mainContainer'>
      <div className='ItemToBePurchased-displayContainer'>
        <img src={item} alt='DJ-decks'></img>
        <span>Pioneer XDJRX2 All In One DJ System for Rekordbox</span>
        <span>Quantity: 1 - £100.00</span>
      </div>
    </div>
  );
}

export default ItemToBePurchased;