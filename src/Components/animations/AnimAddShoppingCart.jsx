import React from 'react';

import Lottie from 'react-lottie';
import animationData from '../../assets/animations/add-shopping-cart.json';

const AnimAddShoppingCart = () => {
  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
  
  return (
    <div>
      <Lottie 
	    options={defaultOptions}
        height={85}
        width={85}
      />
    </div>
  );
}

export default AnimAddShoppingCart;