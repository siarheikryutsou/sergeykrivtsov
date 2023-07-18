import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {getRoutePath} from "../../shared/consts";

const Page404 = () => {
    const [secondsLeft, setSecondsLeft] = useState(5);
    const intervalRef = React.useRef<number | null>(null);
    const navigate = useNavigate();

    function stopTimer(): void {
        if (intervalRef.current) {
            window.clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }

    function startTimer(): void {
        stopTimer();
        const startTime = Date.now();
        intervalRef.current = window.setInterval(() => {
            const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
            const remainingSeconds = Math.max(0, secondsLeft - elapsedTime);
            setSecondsLeft(remainingSeconds);
            if (remainingSeconds === 0) {
                stopTimer();
                navigate(getRoutePath("/"));
            }
        }, 1000);
    }

    useEffect(() => {
        startTimer();
        return () => {
            stopTimer();
        };
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <h1>404</h1>
            <h3>The requested URL was not found</h3>
            <p>
                You will be redirected to <Link to="/">Home page</Link> after {secondsLeft} seconds
            </p>
        </>
    );
};

export default Page404;