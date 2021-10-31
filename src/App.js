import { useState, useEffect } from 'react';
import './App.css';

import ProductsContainer from './components/ProductsContainer';
import HeroSection from './components/HeroSection'
import Promotion from './components/Promotion'
import Quote from './components/Quote'
import Cart from './components/Cart';
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
    const item = await commerce.cart.add(productId,quantity);
    setCart(item.cart)
  }

  const handleUpdateCartQty = async (productId, quantity) =>{
    const response = await commerce.cart.update(productId, {quantity});
    setCart(response.cart)
  }

  const handleRemoveFromCart = async (productId) => {
    const response = commerce.cart.remove(productId);
    setCart(response.cart)
  } 

  const handleEmptyCart = () => {
    const response = commerce.cart.empty();
    setCart(response.cart)
  }

  useEffect(()=>{fetchProducts();fetchCart();},[])
  // if (!cart.total_items) return 'Loading'; //error checker

  return (
    <div className="App">
       <Promotion/>
      <HeroSection/>
      <Cart totalItems={cart.total_items} cart={cart} handleUpdateCartQty={handleUpdateCartQty}/>
      <Quote/>
     <ProductsContainer products={products} handleAddToCart={handleAddToCart }/>
     <Footer/>
     </div>
  );
}

export default App;
