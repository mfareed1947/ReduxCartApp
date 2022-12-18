import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import Product from './Product'

const Home = () => {

    const img1 =
        "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
    const img2 =
        "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";

    const productList = [{
        name: 'Mack Book',
        price: 1200,
        imgSrc: img1,
        id: 'ddgfggffd'
    }, {
        name: 'Nick Shoes',
        price: 633,
        imgSrc: img2,
        id: 'ddgfggasddsddsdffd'
    }]

    const dispatch = useDispatch();

    const addToCart = (options) => {
        dispatch({ type: "addToCart", payload: options })
        toast.success('Added to cart')
        dispatch({ type: "calculatePrice" })
    }

    return (
        <div className='home' style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            {
                productList.map((i) => (
                    <Product name={i.name} key={i.id} id={i.id} imgSrc={i.imgSrc} price={i.price} handler={addToCart} />
                ))
            }
        </div>
    )
}

export default Home