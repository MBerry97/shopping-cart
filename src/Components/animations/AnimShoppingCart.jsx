import React from 'react';
import {Spring} from 'react-spring/renderprops'
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
    <Spring
    from={{opacity: 0, marginTop: -500}}
    to={{opacity: 1, marginTop: 0}}
    >
     {style => (
       <div style={style}>
        <div>
      <Lottie 
	    options={defaultOptions}
        height={60}
        width={60}
      />
    </div>
       </div>
     )}
    </Spring>
  );
}

export default AnimShoppingCart;