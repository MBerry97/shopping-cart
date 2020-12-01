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
props.onItemClick(event.target.alt)
}
    return (
      <div className='displayItems-container'>
        {props.items.map((item, i) => {
          
          return (
            <div key={`div${i}`}className='displayItems-itemContainer'>
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
    onItemClick: (item) => dispatch({type: 'ADD_ITEM_TO_BASKET', value: item})
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(DisplayItems);
