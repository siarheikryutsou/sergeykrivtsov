import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import styles from "./styles.module.css";
import {getRoutePath} from "../../shared/consts";
import LngSelect from "../../shared/ui/lng-select/LngSelect";
import {ContextLng} from "../../app/ContextLng";


const Header = () => {
    const {translations} = useContext(ContextLng);
    
    return (
        <header>
            <LngSelect />
            <nav>
                <Link className={styles.logo} to={getRoutePath("/")}>{translations?.myName}</Link>
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