import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link className="nav__link" to="/">Home</Link>
            <Link className="nav__link" to="/cart">Cart</Link>
        </nav>
    )
}

export default Navbar