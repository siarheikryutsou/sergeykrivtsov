import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import Header from "../widgets/header/Header";
import Router from "./Router";
import {ContextLng} from "./ContextLng";
import {TypeTranslations} from "../shared/types/types";

function App() {

    const defaultLng:string = "en";
    const lngContext = useContext(ContextLng);
    const languages = lngContext.languages;
    const initialingLng:string = localStorage.getItem("lng") || getSystemLng() || defaultLng;
    const [translations, setTranslations] = useState<TypeTranslations | null>(null);
    const [selectedLng, setSelectedLng] = useState(initialingLng);

    function getSystemLng():string {
        const navigatorLng:string = navigator.language.substring(0, 2).toLowerCase();
        if(!languages.hasOwnProperty(navigatorLng)) {
            return defaultLng;
        }
        return navigatorLng;
    }

    async function fetchTranslations(lng:string):Promise<void> {
        const response = await fetch(lng + ".json");
        const json:TypeTranslations = await response.json();
        setTranslations(json);
        setSelectedLng(lng);
    }


    function onLanguageChanged(lng:string):void {
        fetchTranslations(lng);
    }


    useEffect(() => {
        fetchTranslations(initialingLng);
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <ContextLng.Provider value={{
                selectedLng,
                languages,
                translations,
                onLanguageChanged
            }}>
            <BrowserRouter>
                <Header/>
                <main>
                    <Router/>
                </main>

            </BrowserRouter>
            </ContextLng.Provider>
        </>
    );
}

export default App;
