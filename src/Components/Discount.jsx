import React from 'react';


function Discount(props) {

const doSomething = () => {
  console.log('hello')
}

  return (
    <div className='discount-container'>
      <span>Apply promo code</span>
      <input type='text'></input>
      <button onClick={doSomething}>Apply!</button>
    </div>
  );
}

export default Discount;