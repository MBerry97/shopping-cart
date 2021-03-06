const initialState = {
  price: `£0.00`,
  itemName: '',
  itemImage: 'https://cdn0.iconfinder.com/data/icons/shopping-and-commerce-vol-1/48/49-512.png',
  discount: `£0.00`,
  total: `£0.00`,
  message: '',
  items: [],
  itemToDisplay: [],
  loading: true,
  checkout: false,
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'DISCOUNT':
    const priceAsNumber = state.price.slice(1, state.price.length)
    const totalAsNumber = state.total.slice(1, state.total.length)
    
    const discount = priceAsNumber / 10
    const newPrice = totalAsNumber - discount
    
    return {
      ...state,
      discount: `£${discount}`,
      total: `£${newPrice}`,
      message: ''
    };
    case 'INV_CODE':
      return {
      ...state,
      message: 'Please enter a valid code.'
    };
    case 'GET_ITEMS':
     return {
      ...state,
      items: action.value,
      loading: false
    };
    case 'ADD_ITEM_TO_BASKET': 
    let selectedItem = state.items.filter(item => {
     return item.name === action.value
   })
   return {
     ...state,
     price: selectedItem[0].price,
     itemName: selectedItem[0].name,
     itemImage: selectedItem[0].image,
     total: selectedItem[0].price,
     discount: `£0.00`,
     checkout: true
   };
   case 'RETURN_HOME':
     return {
       ...state,
       checkout: false
     };
   default:  return state
  }
  
}


export default reducer