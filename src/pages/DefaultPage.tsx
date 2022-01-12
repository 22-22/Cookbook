import React from 'react';
import './DefaultPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function DefaultPage() {
    return (
        <div className="def-page-container">
            <Header />
            <Footer />
        </div>
    )
}

export default DefaultPage;