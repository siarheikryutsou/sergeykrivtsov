import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./styles.module.css";
import {getRoutePath} from "../../shared/consts";


const Header = () => {
    return (
        <header>
            <nav>
                <Link className={styles.logo} to={getRoutePath("/")}>Siarhei Kryutsou</Link>
                <ul>
                    <li>
                        <Link to={getRoutePath("/bio")}>Bio</Link>
                    </li>

                    <li>
                        <Link to={getRoutePath("/cv")}>CV</Link>
                    </li>

                    <li>
                        <Link to={getRoutePath("/recommendations")}>Recommendations</Link>
                    </li>

                    <li>
                        <Link to={getRoutePath("/contacts")}>Contacts</Link>
                    </li>

                    <li>
                        <Link to={getRoutePath("/blog")}>Blog</Link>
                    </li>
                </ul>
            </nav>
            <div className={styles.bg}></div>
        </header>
    );
};

export default Header;