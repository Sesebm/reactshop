import { configureStore } from '@reduxjs/toolkit'
import products from './products.slice'
import token from './token.slice'

export default configureStore({
  reducer: {
products,
token,
	}
})