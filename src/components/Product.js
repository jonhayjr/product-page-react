import {useContext, useState} from 'react';
import {Link} from 'react-router-dom';

import { productContext } from '../context/productContext';

const Product = (props) => {
    const [inCart, setInCart] = useState(false);

    const {addToCart, removeFromCart} = useContext(productContext);

    const handleClick = (data) => {
        setInCart(prevInCart => !prevInCart)
        if (!data.inCart) {
            addToCart({...data, inCart: true});
        } else {
            removeFromCart({...data, inCart: false});
        }
    }

    return (
        <div className="card">
            <Link to={`/product/${props.data.id}`} className="product-title-link"><h3 className="card__title">{props.data.title}</h3></Link>
            <img className="card__img" src={props.data.image} alt={props.data.title}/>
            <button className="btn" onClick={() => {handleClick(props.data)}}>{inCart ? 'Remove from Cart' : 'Add to Cart'}</button> 
        </div>
    )
}

export default Product;