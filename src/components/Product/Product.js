import React from 'react'
import './Product.css'
import { useStateValue } from '../StateContext'

const Product = ({id, title, image, price, rating}) => {
    const [state, dispatch] = useStateValue()
   
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
            
                id,
                title,
                image,
                price,
                rating
            }
        })
    }

  return (
    <div className="product" key={id}>
        <div className="product__info">
            <p className="product__description">
                {title}
            </p>
    
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                { Array(rating).fill().map((_, i) => (<p><span role="img">🌟</span></p>)) }
            </div>
            <img
                className="product__image" 
                src={image}
                alt=""
                />
            <button onClick={addToBasket} >Add to basket</button>
        </div>

    </div>
  )
}

export default Product