import React from 'react'

const Product = ({ name, id, price, imgSrc, handler }) => {
    return (
        <div style={{ width: '200px', backgroundColor: 'white', display: 'flex', flexDirection: "column", margin: '2rem', borderRadius: '5px', padding: '2rem', color: 'black' }}>
            <img src={imgSrc} alt="" style={{ width: '100%', height: "100%", objectFit: 'cover' }} />
            <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '5px 0' }}> {name}</p>
            <h4 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '5px 0' }}>${price}</h4>
            <button
                onClick={() => handler({ name, price, imgSrc, id, quantity: 1 })}
                style={{ cursor: 'pointer', backgroundColor: '#ed5615', padding: "0.5rem", border: 'none', color: 'white' }}
            >Add to Cart</button>
        </div>
    )
}

export default Product