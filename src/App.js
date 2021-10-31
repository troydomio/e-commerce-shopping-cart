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

  const fetchProducts = async () => {
    const {data} = await commerce.products.list();
    setProducts(data);
  }
  useEffect(()=>{fetchProducts();},[])

// console.log(products)
  return (
    <div className="App">
       <Promotion/>
      <HeroSection/>
      <Navbar/>
      <Quote/>
     <ProductsContainer products={products}/>
     <Footer/>
     </div>
  );
}

export default App;
