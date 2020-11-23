import React from 'react';


function Discount(props) {

const activateDiscount = () => {
  props.discountItem()
}

  return (
    <div className='discount-container'>
      <span>Apply promo code</span>
      <input type='text'></input>
      <button onClick={activateDiscount}>Apply!</button>
    </div>
  );
}

export default Discount;