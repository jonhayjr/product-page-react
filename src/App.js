import {Routes, Route} from 'react-router-dom'

import Home from './pages/Home';
import Cart from './pages/Cart'

import Header from './components/Header';
import Product from './pages/Product';

const App = () => {
  return (
    <div>
      <Header/>
      <div className="main-container">
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="cart" element={<Cart/>}/>
            <Route path="product/:productId" element={<Product/>}/>
          </Routes>
        </div>
    </div>
  );
}

export default App;
