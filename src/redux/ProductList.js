import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import productList from '../productList.json';

export const fetchAllProdcuts = createAsyncThunk('fetch-all-products',async(apiUrl) => {
  const response = await fetch(apiUrl)
  return response.json()
})

const productSlice = createSlice({
  name:'products',
  initialState:{data:[],fetchStatus:''},
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProdcuts.fulfilled,(state,action) => {
        state.data = action.payload
        state.fetchStatus='성공'
      })
      .addCase(fetchAllProdcuts.pending,(state) => {
        state.fetchStatus = '진행중'
      })
      .addCase(fetchAllProdcuts.rejected,(state) => {
        state.data = productList.products
        state.fetchStatus = '에러입니다.'
      })
  }
})

export default productSlice;