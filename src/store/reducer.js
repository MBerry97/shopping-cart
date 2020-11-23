const initialState = {
  price: 100.00,
  discount: 0.00,
  total: 100.00,

}

const reducer = (state = initialState, action) => {
  if(action.type === 'DISCOUNT') {
    const discount = state.price / 10;
    const newPrice = state.total - discount
    return {
      ...state,
      discount: discount,
      total: newPrice
    }
  }
  return state
}


export default reducer