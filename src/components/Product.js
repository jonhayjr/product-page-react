import {useContext} from 'react';
import {Link} from 'react-router-dom';

import { productContext } from '../context/productContext';

const Product = (props) => {
    const {cartItems, addToCart, removeFromCart} = useContext(productContext);

    const inCart = cartItems.find(item => item.id === props.data.id);

    const handleClick = (data) => {
        if (!inCart) {
            addToCart(data);
        } else {
            removeFromCart(data.id);
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