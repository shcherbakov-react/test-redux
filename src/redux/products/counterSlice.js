import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	itemsCount: {},
	cart: [],
	totalPrice: 0,
	totalQuantity: 0,
	isCartOpen: false,
}

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state, action) => {
			const { id } = action.payload;

			const existingProductIndex = state.cart.findIndex(item => item.id === id);
			existingProductIndex !== -1 ? state.cart[existingProductIndex].quantity += 1 : state.cart.push({
				...action.payload,
				quantity: 1
			})
			state.totalQuantity += 1;
			state.isCartOpen = true;
		},
		decrement: (state, action) => {
			const { id } = action.payload;
			const existingProductIndex = state.cart.findIndex(item => item.id === id);

			if (existingProductIndex !== -1) {
				if (state.cart[existingProductIndex].quantity > 1) {
					state.cart[existingProductIndex].quantity -= 1;
					state.totalQuantity -= 1;
				} else {
					state.cart.splice(existingProductIndex, 1);
					state.totalQuantity -= 1;
				}
			}
			state.isCartOpen = state.totalQuantity > 0;
		},
		closeCart: (state) => {
			state.isCartOpen = false
		},
		openCart: (state) => {
			state.isCartOpen = true
		}
	},
})

// Action creators are generated for each case reducer function
export const { increment, decrement, closeCart, openCart } = counterSlice.actions

export default counterSlice.reducer