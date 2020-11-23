const initialState = {
  price: 100.00,
  discount: 0.00,
  total: 100.00,

}

const reducer = (state = initialState, action) => {
  if(action.type === 'DISCOUNT') {
    return {
      price: state.price - 20
    }
  }
  return state
}


export default reducer