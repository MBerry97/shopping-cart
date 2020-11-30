import React, { useEffect } from 'react';
import {getItems} from '../axios-requests'
import {connect} from 'react-redux'

const DisplayItems = (props) => {
  
useEffect(() => {
  getItems().then((res) => {
    console.log(res)
    props.onDisplayItems(res.data)
  }).catch((err) => {
    console.log(err)
  })
}, [])

    return (
      <div className='displayItems-container'>
        {props.items.map((item) => {
          
          return (
            <div className='displayItems-itemContainer'>
            <ul>
            <li><img src={item.image} alt={item.name} /></li>
            <li>{item.name}</li>
            <li>{item.price}</li>
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
    onDisplayItems: (items) => dispatch({type: 'ITEM', value: items}),
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(DisplayItems);
