import {useContext} from 'react';
import { productContext } from '../context/productContext';

import ProductItem from './ProductItem';

const ProductItemContainer = () => {
    const {products, isLoading} = useContext(productContext);

    return (
        <div className="main-container">
             {isLoading
             ? <p className="loading">Loading...</p>
             : <>
                <h2 className="home-title">Products</h2>
                <div className="grid-container">
                    {products.map(product => (
                    <ProductItem key={product.id} data={product}/>
                    ))}
                </div>
                </>
             }
             </div>
    )
}

export default ProductItemContainer;