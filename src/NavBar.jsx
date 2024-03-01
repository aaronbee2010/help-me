import './NavBar.css';

const NavBar = () => {
    return (
        <div id="navbar">
            <div id="navbar-item-1">
                <a href="/"><div id="navbar-home">Home</div></a>
                <a href="/products"><div id="navbar-products">Products</div></a>
            </div>
            <div id="navbar-item-2">
                <div id="navbar-basket">Your Basket</div>
            </div>
        </div>
    );
}

export default NavBar;
