import React, {useState, useEffect} from 'react';

const productContext = React.createContext();

const {Provider, Consumer} = productContext;

const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
      const newData = data.map(d => ({...d, inCart: false}))
      setProducts(newData);
      setIsLoading(false);
    })
  }, [])

  return (
    <Provider value={{products, isLoading}}>
      {props.children}
    </Provider>
  )
}

export {ProductProvider, productContext}