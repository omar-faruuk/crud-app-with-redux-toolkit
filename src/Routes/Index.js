import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import BooksView from './../Features/Books/BooksView';
import EditBook from './../Features/Books/EditBook';
import AddBook from './../Features/Books/AddBook';
import Navbar from './../Layout/Navbar';
import Footer from '../Layout/Footer';

const Index = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/show-books' element={<BooksView />} />
                    <Route path='/edit-book' element={<EditBook />} />
                    <Route path='/add-book' element={<AddBook />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
};

export default Index;