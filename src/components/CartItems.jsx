import React from 'react'
import { AiFillDelete } from 'react-icons/ai'

const CartItems = ({ imgSrc, name, price, qty, increment, decrement, deletehandler, id }) => {
    return (
        <div className="cartitems">
            <img src={imgSrc} alt="" />
            <article>
                <h3>{name}</h3>
                <p>${price}</p>
            </article>
            <div>
                <button onClick={() => increment(id)}>+</button>
                <p>{qty}</p>
                <button onClick={() => decrement(id)}>-</button>
            </div>
            <AiFillDelete onClick={() => deletehandler(id)} />
        </div>
    )
}

export default CartItems