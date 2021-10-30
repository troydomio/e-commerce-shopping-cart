import './App.css';
import ProductsContainer from './components/ProductsContainer';
import HeroSection from './components/HeroSection'
import Promotion from './components/Promotion'
import Quote from './components/Quote'

function App() {
  return (
    <div className="App">
      <Promotion/>
      <HeroSection/>
      <Quote/>
     <ProductsContainer/>
     
    </div>
  );
}

export default App;
