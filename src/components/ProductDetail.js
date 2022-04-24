import {useContext} from 'react';
import { productContext } from '../context/productContext';

const ProductDetail = ({currentProduct}) => {

    const MAX_LENGTH = 450;

    const {cartItems, addToCart, removeFromCart} = useContext(productContext);

    const getDollarAmount = (amount) => {
        return amount ? `$${amount.toFixed(2).toLocaleString()}` : '';
    }

    const handleClick = (data) => {
        if (!checkIfInCart()) {
            addToCart(data);
        } else {
            removeFromCart(data.id);
        }
    }

    const checkIfInCart = () => {
        const alreadyInCart = cartItems.some(item => item.id === currentProduct.id);
        return alreadyInCart;
    }

    return ( 
        <div>  
        {currentProduct ?
            <div className="card card__detail">
                <h3 className="card__title">{currentProduct.title}</h3>
                <img className="card__img" src={currentProduct.image} alt={currentProduct.title}/>
                <p className="card__price">{getDollarAmount(currentProduct?.price)} <span className="card__cart-status" style={{backgroundColor: checkIfInCart()? 'green' : 'red'}}>{checkIfInCart() ? 'In Cart' : 'Not In Cart'}</span></p>
                <p className="card__description">{`${currentProduct.description?.substring(0, MAX_LENGTH)}...`}</p>
                <button className="btn" onClick={() => {handleClick(currentProduct)}}>{checkIfInCart() ? 'Remove from Cart' : 'Add to Cart'}</button>
            </div>
            : ''
        }
        </div>
    )
}

export default ProductDetail