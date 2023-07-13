import React from 'react';
import {pageTitle} from "../../shared/consts";

const PageCV = () => {

    document.title = "CV" + pageTitle;

    return (
        <h1>CV page</h1>
    );
};

export default PageCV;