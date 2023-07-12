import React, {useState} from 'react';
import {Link} from "react-router-dom";

const Page404 = () => {
    const [secondsLeft, setSecondsLeft] = useState(5);
    return (
        <>
            <h1>404</h1>
            <h3>The requester URL was not found</h3>
            <p>You will be redirected to <Link to="/">Home page</Link> after {secondsLeft} seconds</p>
        </>
    );
};

export default Page404;