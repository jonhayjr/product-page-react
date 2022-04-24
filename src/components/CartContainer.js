import {useContext} from 'react';

import { productContext } from '../context/productContext';
const CartContainer = () => {

    const {cartItems, removeFromCart} = useContext(productContext);

    const getDollarAmount = (amount) => {
        return amount ? `$${amount.toFixed(2).toLocaleString()}` : '';
    }

    const getTotal = () => {
        const total = cartItems.reduce((sum, i) => {
            return sum + i.price;
        }, 0)

        return getDollarAmount(total);
    }

    return (
        <div className="cart-container">
            <h1 className="cart-heading">Cart</h1>
            {
                cartItems.map(item => (
                    <div key={item.id}>
                        <div className="cart-flex cart-item-container">
                            <div className="cart-flex">
                                <img src={item.image} alt={item.title} className='cart-thumbnail'/>
                                <p>{item.title}</p>
                            </div>
                            <p>{getDollarAmount(item.price)}</p>
                        </div>
                        <button className="btn btn__cart" onClick={() => {removeFromCart({...item, inCart: false})}}>Remove From Cart</button>
                        <hr/>
                    </div>
                ))
            }
            <div className="cart-flex">
                {getTotal() && <p className="cart__total">Total</p>}
                <p>{getTotal()}</p>
            </div>
        </div>
    )
}

export default CartContainer;