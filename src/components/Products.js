import {useContext} from 'react';
import { productContext } from '../context/productContext';

import Product from './Product';

const Products = () => {
    const {products, isLoading} = useContext(productContext);

    const ProductElements = products.map(product => (
        <Product key={product.id} data={product}/>
    ))
    return (
        <>
             {isLoading
             ? <p className="loading">Loading...</p>
             : <div className="grid-container">
                    {ProductElements}
                </div>
             }
             </>
    )
}

export default Products;