import React, {useContext} from 'react';
import styles from "./styles.module.css";
import {ContextLng} from "../../app/ContextLng";

const PageMain = () => {
    const {translations} = useContext(ContextLng);

    document.title = `${translations?.myName} | Front End Developer`;

    function createMarkup(htmlText:string | undefined) {
        return {__html: htmlText || ""};
    }

    return (
        <div id="pageMain" className={styles.pageMain}>
            <article className={styles.headingArticle}>
                <h1 className={styles.mainHeading} aria-label={translations?.specialization} dangerouslySetInnerHTML={createMarkup(translations?.mainPageHeading)} />
                <p className={styles.mainHeadingSub}>{translations?.mainDescription}</p>
            </article>
            <article>
                <img className={styles.photo} src="/imgs/me.jpg" alt="Siarhei Kryutsou" />
            </article>
        </div>
    );
};

export default PageMain;