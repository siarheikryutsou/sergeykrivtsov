import React from 'react';
import styles from "./styles.module.css";

const PageMain = () => {

    document.title = "Sergey Krivtsov | Front End Developer";

    return (
        <div id="pageMain" className={styles.pageMain}>
            <article>
                <h1 className={styles.mainHeading} aria-label="Front end developer">Front End<br/>Developer</h1>
                <p className={styles.mainHeadingSub}>Hello, I'm Siarhei. I enjoy creating interactive applications, focusing on quality, creativity, and user interaction.</p>
            </article>
        </div>
    );
};

export default PageMain;