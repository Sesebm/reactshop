import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const productsSlice = createSlice({
		name: 'products',
    initialState: null,
    reducers: {
        
    setProducts: (state, action) => action.payload 

    }
})

export const { setProducts  } = productsSlice.actions;

export default productsSlice.reducer;

export const getProductsThunk = () => (dispatch) => {
  const URL= `https://ecommerce-api-react.herokuapp.com/api/v1/products`
  return axios.get(URL)
      .then(res => dispatch(setProducts(res.data.data.products)))
      .catch(err => console.log(err))
      /* .finally(console.log(`paso`)) */
}