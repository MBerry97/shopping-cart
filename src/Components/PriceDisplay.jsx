import React from 'react';


function PriceDisplay(props) {
  return (
    <div className='PriceDisplay'>
      <span>Sub total: £{props.initialPrice}</span>
      <span>Discount: £0.00</span>
      <span>Est. Total: £100</span>
    </div>
  );
}




export default PriceDisplay;