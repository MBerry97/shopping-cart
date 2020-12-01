import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://shoppingcartapidemo.herokuapp.com/'
})

export const getItems = () => {
  return instance
  .get('/items')
}

