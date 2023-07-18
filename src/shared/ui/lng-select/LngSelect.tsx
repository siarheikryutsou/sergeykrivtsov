import React, {FC, useContext} from 'react';
import {ContextLng} from "../../../app/ContextLng";
import Select from "../select/Select";
import {TypeLanguages} from "../../types/types";
import styles from "./styles.module.css";

const LngSelect:FC = () => {

    const {selectedLng, translations, languages, onLanguageChanged} = useContext(ContextLng);

    return (
        <div className={styles.select}>
            <Select id="lng-select"
                    value={selectedLng}
                    title={translations?.titleChangeLanguage}
                    onChange={onLanguageChanged || null}
                    options={Object.keys(languages).map(key => {
                        return {
                                value: key,
                                contents: languages[key as keyof TypeLanguages]
                            }
                        })
                    }
            />
            <button
                className={`${styles.lngButton} ${styles[selectedLng]}`}
                tabIndex={-1}
            >

            </button>
        </div>
    );
};

export default LngSelect;