import {useContext} from 'react';
import {useParams, useNavigate} from 'react-router-dom';

import { productContext } from '../context/productContext';

import ProductDetail from '../components/ProductDetail';

const ProductDetailContainer = () => {
    const params = useParams();

    const navigate = useNavigate();

    const {products} = useContext(productContext);

    const getPrevious = () => {
        const previousId = parseInt(params.productId) - 1 > 0 ? parseInt(params.productId) - 1 : 1;

        navigate(`/product/${previousId}`)
    }

    const getNext = () => {
        const nextId = parseInt(params.productId) + 1 <= products.length ? parseInt(params.productId) + 1 : parseInt(params.productId);
        navigate(`/product/${nextId}`);
    }

    const getCurrentProduct = () => {
        const currentProduct = products.find(product => product.id === parseInt(params.productId));
        return currentProduct
    }

    return (
        <div className="main-container">
            <div className="btn-group">
                <button disabled={parseInt(params.productId) === 1} onClick={getPrevious} className="btn">Previous</button>
                <button disabled={parseInt(params.productId) === products.length} className="btn" onClick={getNext}>Next</button>
            </div>
            <ProductDetail currentProduct={getCurrentProduct()}/>
        </div>
    )
}


export default ProductDetailContainer;