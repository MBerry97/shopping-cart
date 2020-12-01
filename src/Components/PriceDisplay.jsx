import React from 'react';


const PriceDisplay = (props) => {
  return (
    <div className='PriceDisplay'>
      <span>Sub total: {props.initialPrice}</span>
      <span id='discountAmount'>Discount: {props.discount}</span>
      <span>Est. Total: {props.total}</span>
    </div>
  );
}




export default PriceDisplay;