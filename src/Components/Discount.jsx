import React from 'react';


function Discount(props) {

const activateDiscount = (event) => {
  event.preventDefault()
  const discountValue = event.target.discount.value
  if (discountValue === 'DISCOUNT') {
     props.discountItem()
  } else {
    props.invalidCodeDispatch()
  }
  
}

  return (
    <div className='discount-container'>
      <span>Apply promo code</span>
      <form onSubmit={activateDiscount}>
      <input type='text' name='discount'></input>
      <input type='submit' value='Apply!' ></input>
      </form>
      <span>{props.message}</span>
    </div>
  );
}

export default Discount;