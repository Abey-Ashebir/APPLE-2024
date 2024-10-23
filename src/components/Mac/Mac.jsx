import { useState, useEffect } from 'react';
import './Mac.css';

function Iphone() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5173/Mac')  // Correcting the path to fetch the JSON file
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);  // Assuming the data is an array of products
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, []);

    // Function to toggle order between image and info
    const getOrder = (index) => {
        return index % 2 === 0; // true for even index (image on left), false for odd index (image on right)
    };

    return (
        
        <div>
            <section className="internal-page-wrapper">
                <div className="container">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="col-12 mt-5 pt-5">
                            <h1 className="font-weight-bold">iPhone Products</h1>
                        </div>
                    </div>
                    <div className="row">
                        {products.length > 0 ? (
                            products.map((product, index) => (
                                <div className="col-12 product-item" key={product.id}>
                                    <div className={`card product-card ${getOrder(index) ? '' : 'flex-row-reverse'}`}>
                                        <div className="image-container">
                                            <img src={product.image_url} className="card-img-top" alt={product.name} />
                                        </div>
                                        <div className="info-container">
                                            <h5 className="card-title">{product.name}</h5>
                                            <p className="card-text">{product.description}</p>
                                            <a href={product.product_url} className="btn btn-primary">View Product</a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>Loading products...</p>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Iphone;
