import React from 'react';

const Discount = (props) => {
  
const activateDiscount = (event) => {
  event.preventDefault()
  const discountValue = event.target.discount.value
  if (discountValue === 'DISCOUNT') {
     props.discountItem()
     event.target.button.disabled = true;
     document.getElementById('discountAmount').style.color = 'green'
  } else {
    props.invalidCodeDispatch()
  }
  
}

  return (
    <div className='discount-container'>
      <span>Apply promo code</span>
      <form onSubmit={activateDiscount}>
      <input type='text' name='discount'></input>
      <button type='submit' id='button' name='button'>Apply! </button> 
      </form>
      <span id='invalidCode-message'>{props.message}</span>
    </div>
  );
}

export default Discount;