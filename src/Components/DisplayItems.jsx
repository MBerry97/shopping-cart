import React, { useEffect } from 'react';
import {getItems} from '../axios-requests'
import {connect} from 'react-redux'
import Spinner from '../Spinner/Spinner.jsx'
import {Link } from "@reach/router"
import {Spring} from 'react-spring/renderprops'


const DisplayItems = (props) => {
  
useEffect(() => {
  getItems().then((res) => {
    props.onDisplayItems(res.data)
    
  }).catch((err) => {
    console.log(err)
  })
}, [props.loading]) // eslint-disable-line react-hooks/exhaustive-deps

const handleClick = (event) => {
props.onItemClick(event.target.alt)
}

if (props.loading === true) {
  return (
    <Spinner />
  )
} else {
    return (
      <Spring
    from={{opacity: 0, marginRight: -500}}
    to={{opacity: 1, marginRight: 0}}
    config={{delay: 600}}
    >
     {style => (
       <div style={style}>
        <div className='displayItems-container'>
        {props.items.map((item, i) => {
          
          return (
            <div key={`div${i}`}className='displayItems-itemContainer'>
            <ul>
              <Link to='/checkout'>
            <li><img onClick={handleClick} src={item.image} alt={item.name} key={item.name} /></li>
            </Link>
            <li key={item.image}>{item.name}</li>
            <li id='itemPrice' key={item.price}>{item.price}</li>
            </ul>
            </div>
          )
        })}
      </div>
       </div>
     )}
    </Spring>
      
      
    );
      }
}

const mapStatetoProps = (state) => {
  return {
    price: state.price,
    discount: state.discount,
    total: state.total,
    message: state.message,
    items: state.items,
    loading: state.loading,
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
