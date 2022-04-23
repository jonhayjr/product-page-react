import {Routes, Route} from 'react-router-dom'

import Home from './pages/Home';
import Cart from './pages/Cart'

import Header from './components/Header';
import Product from './pages/Product';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="layout">
      <Header/>
      <div className="main-container">
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="cart" element={<Cart/>}/>
            <Route path="product/:productId" element={<Product/>}/>
          </Routes>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
