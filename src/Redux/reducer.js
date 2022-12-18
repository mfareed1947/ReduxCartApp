import { createReducer } from '@reduxjs/toolkit'


export const cartReducer = createReducer({
    cartItem: [],
    subTotal: 0,
    Shipping: 0,
    tax: 0,
    total: 0,
},
    {
        addToCart: (state, action) => {
            const items = action.payload;
            const isItemExist = state.cartItem.find((i) => i.id === items.id)

            if (isItemExist) {
                state.cartItem.forEach((i) => {
                    if (i.id === items.id) i.quantity += 1;
                })
            } else {
                state.cartItem.push(items)
            }
        },

        decrement: (state, action) => {
            const item = state.cartItem.find((i) => i.id === action.payload)
            if (item.quantity > 1) state.cartItem.forEach((i) => {
                if (i.id === item.id) i.quantity -= 1
            })

        },

        deleteFromCart: (state, action) => {
            state.cartItem = state.cartItem.filter((i) => i.id !== action.payload)
        },

        calculatePrice: (state) => {
            let sum = 0;
            state.cartItem.forEach((i) => (sum += i.price * i.quantity));
            state.subTotal = sum;
            state.Shipping = state.subTotal < 1000 ? 200 : 0;
            state.tax = +(state.subTotal * 0.18).toFixed();
            state.total = state.subTotal + state.tax + state.Shipping;
          },


    })







