import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductList from './ProductList';

const App = () => {
    return (
        <div className="container">
            <Header />
            <ProductList />
            <Footer />
        </div>
    );
};

export default App;