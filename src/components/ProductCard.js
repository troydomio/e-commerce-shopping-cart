import React from 'react'
import '../App.css';
import { IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons'

const ProductCard = ({product}) => {
    return (
        <div className="card">
           <img src={product.image}/>
           <h3>{product.name}</h3>
           <p>${product.price}</p>
           <IconButton aria-label="Add to Cart">
               <AddShoppingCart/>
           </IconButton>
        </div>
    )
}

export default ProductCard
