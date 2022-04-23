import {Link} from 'react-router-dom';

const Product = (props) => {
    return (
        <div className="card">
            <Link to={`/product/${props.data.id}`}><h3 className="card__title">{props.data.title}</h3></Link>
            <img className="card__img" src={props.data.image} alt={props.data.title}/>
            <button className="btn">Add to Cart</button>
        </div>
    )
}

export default Product;