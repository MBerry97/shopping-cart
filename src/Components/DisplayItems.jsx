import React, { useEffect } from 'react';
import {getItems} from '../axios-requests'

const DisplayItems = () => {
  
useEffect(() => {
  getItems().then((res) => {
    console.log(res)
  }).catch((err) => {
    console.log(err)
  })
})
    return (
      <div>
        
      </div>
    );
  
}

export default DisplayItems;
