import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/products/counterSlice'

export const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
})