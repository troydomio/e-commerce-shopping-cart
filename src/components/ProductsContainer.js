import React from 'react'
import { Grid } from '@material-ui/core'
import ProductCard from './ProductCard'

// Mock products data
const products = [
    {id:1, name:'Caramel Latte', description:'a latte made with caramel syrup',image:"https://shottbeverages.com/wp-content/uploads/2017/09/Salted-Caramel-Latte_preview.jpg", price:10},
    {id:2, name:'Iced Oatmilk Shaken Espresso', description:'A shaken espresso beverage made with oatmilk',image:'https://www.theflavorbender.com/wp-content/uploads/2021/04/Brown-Sugar-iced-coffee1-4346-780x1169.jpg',price:15}, 
    {id:3, name:'Cold Brew', description:'a plain coffee beverage', image:'https://bonteacafe.com/media/cold_brew_coffee_4.jpg',  price:5},{id:4, name:'Caramel Latte', description:'a latte made with caramel syrup',image:"https://shottbeverages.com/wp-content/uploads/2017/09/Salted-Caramel-Latte_preview.jpg", price:10},
    {id:5, name:'Iced Oatmilk Shaken Espresso', description:'A shaken espresso beverage made with oatmilk',image:'https://www.theflavorbender.com/wp-content/uploads/2021/04/Brown-Sugar-iced-coffee1-4346-780x1169.jpg',price:15}, 
    {id:6, name:'Cold Brew', description:'a plain coffee beverage', image:'https://bonteacafe.com/media/cold_brew_coffee_4.jpg',  price:5}
]

const ProductsContainer = () => {

    return (
        <main>
            <Grid container justifyContent="center" spacing={4}>
                {products.map((product)=>(
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <ProductCard product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default ProductsContainer
