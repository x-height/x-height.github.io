import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/about/name">About name</Link></li>
                <li><Link to="/posts">Posts</Link></li>
            </ul>
            <hr />
        </div>
    );
};

export default Menu;