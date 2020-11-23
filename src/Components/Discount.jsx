import React from 'react';


function Discount(props) {

const activateDiscount = (event) => {
  event.preventDefault()
  const discountValue = event.target.discount.value
  if (discountValue === 'DISCOUNT') {
     props.discountItem()
  }
  
}

  return (
    <div className='discount-container'>
      <span>Apply promo code</span>
      <form onSubmit={activateDiscount}>
      <input type='text' name='discount'></input>
      <input type='submit' value='Apply!' ></input>
      </form>
    </div>
  );
}

export default Discount;