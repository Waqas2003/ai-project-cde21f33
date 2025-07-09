import React from 'react';
import ProductCard from '../components/ProductCard';

const products = [
    {
        id: 1,
        name: 'Product 1',
                image: 'images/product1.jpg',
    },
    {
        id: 2,
        name: 'Product 2',
                image: 'images/product2.jpg',
    },
    // ...
];

const ProductList = () => {
    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;