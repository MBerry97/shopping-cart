import React from 'react';
import item from '../assets/DJ-decks.jpg'


const ItemToBePurchased = (props) => {
  return (
    <div className='ItemToBePurchased-mainContainer'>
      <span><strong>My Cart 🛍️</strong></span>
      <div className='ItemToBePurchased-displayContainer'>
        <img src={props.itemImage} alt='DJ-decks'></img>
        <div className='Item-details'>
        <span>{props.itemName}</span>
        <span>Quantity: 1 </span>
         <span> {props.initialPrice}</span>
        </div>
      </div>
    </div>
  );
}

export default ItemToBePurchased;