import { useState, useEffect } from 'react';
import './Products.css';

const Products = () => {
    const [basket, setBasket] = useState([]);
    const [products, setProducts] = useState(null);

    // console.log("cheese");

    const addToBasket = id => { 

        const quantity = document.getElementById(id).value;
        console.log(id);
        console.log(quantity);
        setBasket([...basket, {"id": id, "quantity": quantity}]);
        setBasket([...basket, "hello"]);
        console.log(basket);
    }

    const genProductList = (products) => {
        const productsHtml = products.map(product => {
            
            return (
                <div key={product.id} id={`product-${product.id}`}>
                    <h3>{product.ProductName}</h3>
                    <p>£{parseFloat(product.UnitPrice).toFixed(2)} - {product.UnitsInStock} unit(s) in stock</p>
                    
                    <input id={`number-${product.id}`} type="number" min="0" max={product.UnitsInStock}/>
                    
                    <button onClick={() => addToBasket(`number-${product.id}`)} style={{marginLeft: "16px"}}>
                        Add to Basket
                    </button>
                </div>
            );
        });

        return productsHtml;
    }

    useEffect(() => {
        fetch("http://localhost:4000/products")
            .then(res => res.json())
            .then(data => {
                setProducts(genProductList(data));
            });
    }, []);

    return (
    <div id="products-page">
        <div id="products-heading">Products</div>
        {products}
    </div>
    );
}

export default Products;
