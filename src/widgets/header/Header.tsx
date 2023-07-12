import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/bio">Bio</Link>
                    </li>

                    <li>
                        <Link to="/cv">CV</Link>
                    </li>

                    <li>
                        <Link to="/recommendations">Recommendations</Link>
                    </li>

                    <li>
                        <Link to="/contacts">Contacts</Link>
                    </li>

                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;