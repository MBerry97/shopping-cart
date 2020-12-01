import React, { useEffect } from 'react';
import {getItems} from '../axios-requests'
import {connect} from 'react-redux'

const DisplayItems = (props) => {
  
useEffect(() => {
  getItems().then((res) => {
    props.onDisplayItems(res.data)
  }).catch((err) => {
    console.log(err)
  })
}, [])

const handleClick = (event) => {
console.log(event.target.alt)
}
    return (
      <div className='displayItems-container'>
        {props.items.map((item) => {
          
          return (
            <div className='displayItems-itemContainer'>
            <ul>
            <li><img onClick={handleClick} src={item.image} alt={item.name} key={item.name} /></li>
            <li key={item.image}>{item.name}</li>
            <li key={item.price}>{item.price}</li>
            </ul>
            </div>
          )
        })}
      </div>
    );
  
}

const mapStatetoProps = (state) => {
  return {
    price: state.price,
    discount: state.discount,
    total: state.total,
    message: state.message,
    items: state.items
  }
}


//configure dispatch actions we can send to the reducer and also pass as a prop
const mapDispatchtoProps = (dispatch) => {
  return {
    onDisplayItems: (items) => dispatch({type: 'GET_ITEMS', value: items}),
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(DisplayItems);
