import Navbar from "./Navbar";

const Header = () => {
    return (
        <header>
            <div className="container flex-nav">
                <h1 className="logo">JH Inc</h1>
                <Navbar/>
            </div>
        </header>
    )
}

export default Header;