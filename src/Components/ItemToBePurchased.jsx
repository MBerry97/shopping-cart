import React from 'react';
import item from '../assets/DJ-decks.jpg'


function ItemToBePurchased(props) {
  return (
    <div className='ItemToBePurchased-mainContainer'>
      <span>Items in your basket...</span>
      <div className='ItemToBePurchased-displayContainer'>
        <img src={item} alt='DJ-decks'></img>
        <div className='Item-details'>
        <span>Pioneer XDJRX2 All In One DJ System for Rekordbox</span>
        <span>Quantity: 1 </span>
         <span> £100.00</span>
        </div>
      </div>
    </div>
  );
}

export default ItemToBePurchased;