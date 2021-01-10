import React from 'react';

import Lottie from 'react-lottie';
import animationData from '../../assets/animations/shopping-cart-icon.json';

const AnimShoppingCart = () => {
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
        height={60}
        width={60}
      />
    </div>
  );
}

export default AnimShoppingCart;