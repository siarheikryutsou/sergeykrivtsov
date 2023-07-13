import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./styles.module.css";
import {gitPagesEntryPath, isGitPages} from "../../shared/consts";


const Header = () => {
    return (
        <header>
            <nav>
                <Link className={styles.logo} to={isGitPages() ? `/${gitPagesEntryPath}` : "/"}>Siarhei Kryutsou</Link>
                <ul>
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
            <div className={styles.bg}></div>
        </header>
    );
};

export default Header;