import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/animations/add-shopping-cart.json';
import {Spring} from 'react-spring/renderprops'


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

    <Spring
    from={{opacity: 0, marginTop: -500}}
    to={{opacity: 1, marginTop: 0}}
    >
     {style => (
       <div style={style}>
        <div>
      <Lottie 
	    options={defaultOptions}
        height={85}
        width={85}
      />
    </div>
       </div>
     )}
    </Spring>


    
  );
}

export default AnimAddShoppingCart;