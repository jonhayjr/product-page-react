import {useParams} from 'react-router-dom';

import ProductDetail from '../components/ProductDetail';

const Product = () => {
    const params = useParams();

    return (
        <ProductDetail id={params.productId}/>
    )
}

export default Product;