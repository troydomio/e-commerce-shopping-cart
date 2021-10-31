import React from 'react'
import '../App.css';
import { IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons'

const ProductCard = ({product,handleAddToCart }) => {
    // console.log(product)
    return (
        <div className="card">
           <img src={product.image.url} alt={product.name}/>
           <h3>{product.name}</h3>
           <p>${product.price.formatted}</p>
           <IconButton aria-label="Add to Cart" onClick={()=>handleAddToCart(product.id,1)}>
               <AddShoppingCart/>
           </IconButton>
        </div>
    )
}

export default ProductCard
