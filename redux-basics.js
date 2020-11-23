const redux = require('redux')
const createStore = redux.createStore

const initialState = {
     counter: 0
}
//Redcuer
const rootReducer = (state = initialState, action) => {
     if (action.type === 'INC_COUNTER') {
          return {
               ...state,
               counter: state.counter + 1
          }
     }
     if (action.type === 'DEC_COUNTER') {
          return {
               ...state,
               counter: state.counter - action.value
          }
     }
     return state
}

//Store
const store = createStore(rootReducer);
console.log(store.getState())

//Subscription
//activates everytime an action is dispatched
store.subscribe(() => {
     console.log('Subscription', store.getState())
})



//Dispatching action

//takes as action as an arguemnt, needs a type property
store.dispatch({type: 'INC_COUNTER'})
store.dispatch({type: 'DEC_COUNTER', value: 13})
console.log(store.getState())

