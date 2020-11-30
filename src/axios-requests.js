import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://shopping-cart-api-5ed90.firebaseio.com/'
})

export const getItems = () => {
  return instance
  .get('/items.json')
}

