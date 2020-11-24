const initialState = {
  price: 100.00,
  discount: 0.00,
  total: 100.00,
  message: ''
}

const reducer = (state = initialState, action) => {
  if(action.type === 'DISCOUNT') {
    const discount = state.price / 10;
    const newPrice = state.total - discount
    return {
      ...state,
      discount: discount,
      total: newPrice,
      message: ''
    }
  }
  if(action.type === 'INV_CODE') {
    return {
      ...state,
      message: 'Please enter a valid code.'
    }
  }
  return state
}


export default reducer