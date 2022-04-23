import React, {useState, useEffect} from 'react';

const productContext = React.createContext();

const {Provider, Consumer} = productContext;

const ProductProvider = (props) => {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products')) || []);
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
      const newData = data.map(d => ({...d, inCart: false}))
      setProducts(newData);
      localStorage.setItem('products', JSON.stringify(newData))
      setIsLoading(false);
    })
  }, [])

  const addToCart = (item) => {
    setCartItems(prevItems => {
      const newItems = [...prevItems, item];
      localStorage.setItem('cartItems', JSON.stringify(newItems))
      return newItems;
    })
  }

  const removeFromCart = (id) => {
    setCartItems(prevItems => {
      const newItems = prevItems.filter(item => item.id !== id);
      localStorage.setItem('cartItems', JSON.stringify(newItems))
      return [...newItems];
    })
  }

  return (
    <Provider value={{products, isLoading, cartItems, addToCart, removeFromCart}}>
      {props.children}
    </Provider>
  )
}

export {ProductProvider, productContext}