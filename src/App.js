import { useState, useEffect } from 'react';
import './App.css';

import ProductsContainer from './components/ProductsContainer';
import HeroSection from './components/HeroSection'
import Promotion from './components/Promotion'
import Quote from './components/Quote'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {commerce} from './lib/commerce'

function App() {
  // fetch products from backend
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const {data} = await commerce.products.list();
    setProducts(data);
  }

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();
    setCart(cart);
  }
  const handleAddToCart = async (productId, quantity) =>{
    const item = await commerce.cart.add(productId,quantity)
    setCart(item.cart)
  }

  useEffect(()=>{fetchProducts();fetchCart();},[])
  console.log(cart)

// console.log(products)
  return (
    <div className="App">
       <Promotion/>
      <HeroSection/>
      <Navbar totalItems={cart.total_items}/>
      <Quote/>
     <ProductsContainer products={products} handleAddToCart={handleAddToCart }/>
     <Footer/>
     </div>
  );
}

export default App;
