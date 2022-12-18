import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CartItems from './CartItems'


const Cart = () => {

    const { cartItem, subTotal, tax, Shipping, total } = useSelector(state => state.cart)
    const dispatch = useDispatch()
    dispatch({ type: "calculatePrice" })
    const increment = (id) => {
        console.log(id)
        dispatch({
            type: "addToCart",
            payload: { id },
        })
        dispatch({ type: "calculatePrice" })
    }
    const decrement = (id) => {
        dispatch({
            type: "decrement",
            payload: id,
        })
        dispatch({ type: "calculatePrice" })
    }
    const deletehandler = (id) => {

        dispatch({
            type: "deleteFromCart",
            payload: id,
        })
        dispatch({ type: "calculatePrice" })
    }



    return (
        <div className="cartlist">
            <main>
                {cartItem.length > 0 ? (
                    cartItem.map((i) => (
                        <CartItems
                            imgSrc={i.imgSrc}
                            name={i.name}
                            price={i.price}
                            qty={i.quantity}
                            id={i.id}
                            key={i.id}
                            increment={increment}
                            decrement={decrement}
                            deletehandler={deletehandler}
                        />
                    ))
                ) : (
                    <h1>No Items Yet</h1>
                )}
            </main>

            <aside>
                <h2>SubTotal: ${subTotal}</h2>
                <h2>Shipping: ${Shipping}</h2>
                <h2>Tax: ${tax}</h2>
                <h2>Total: ${total}</h2>
            </aside>
        </div>
    )
}

export default Cart