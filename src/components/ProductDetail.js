import {useContext} from 'react';

import { productContext } from '../context/productContext';

const ProductDetail = (props) => {
    const MAX_LENGTH = 450;

    const {products} = useContext(productContext);

    const currentProduct = products.find(product => product.id === parseInt(props.id));

    const getDollarAmount = (amount) => {
        return amount ? `$${amount.toFixed(2).toLocaleString()}` : '';
    }

    return ( 
        <>  
        {products.length > 0 &&
            <div className="card card__detail">
                <h3 className="card__title">{currentProduct.title}</h3>
                <img className="card__img" src={currentProduct.image} alt={currentProduct.title}/>
                <p className="card__price">{getDollarAmount(currentProduct.price)}</p>
                <p className="card__description">{`${currentProduct.description.substring(0, MAX_LENGTH)}...`}</p>
            </div>
        }
        </>
    )
}

export default ProductDetail