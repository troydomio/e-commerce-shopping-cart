import React from 'react'
import { Grid } from '@material-ui/core'
import ProductCard from './ProductCard'

const ProductsContainer = ({products, handleAddToCart }) => { 
    return (
        <main id="shop">
            <Grid container justifyContent="center" spacing={4}>
                {
                products.map((product)=>(
                    <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                    <ProductCard product={product} handleAddToCart ={handleAddToCart}/>
                    </Grid>
                ))}
                
            </Grid>
        </main>
    )
}

export default ProductsContainer
