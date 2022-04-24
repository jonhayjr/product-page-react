import {useContext} from 'react';
import { productContext } from '../context/productContext';

import ProductItem from './ProductItem';

const ProductContainer = () => {
    const {products, isLoading} = useContext(productContext);

    const ProductElements = products.map(product => (
        <ProductItem key={product.id} data={product}/>
    ))
    return (
        <div className="product-container">
             {isLoading
             ? <p className="loading">Loading...</p>
             : <>
                <h2 className="home-title">Products</h2>
                <div className="grid-container">
                    {ProductElements}
                </div>
                </>
             }
             </div>
    )
}

export default ProductContainer;