import React from 'react';


const PriceDisplay = (props) => {
  return (
    <div className='PriceDisplay'>
      <span>Sub total: <span className='PriceDisplay-price'>{props.initialPrice}</span></span>
      <span id='discountAmount'>Discount: <span className='PriceDisplay-price' id='discountAmountPrice'>{props.discount}</span></span>
      <span>Est. Total: <span className='PriceDisplay-price'>{props.total}</span></span>
    </div>
  );
}




export default PriceDisplay;