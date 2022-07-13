import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <Link className='nav-link' to="home">Home</Link>
            <Link className='nav-link' to="show-books">Show books</Link>
            <Link className='nav-link' to="add-book">Add book</Link>
        </nav>
    );
};

export default Navbar;