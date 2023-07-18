import React, {FC, useContext} from 'react';
import {ContextLng} from "../../../app/ContextLng";
import Select from "../select/Select";
import {TypeLanguages} from "../../types/types";
import styles from "./styles.module.css";

const LngSelect:FC = () => {

    const {selectedLng, languages, onLanguageChanged} = useContext(ContextLng);
    let select:HTMLSelectElement | null;

    function handleSelectRef(selectElement:HTMLSelectElement | null):void {
        select = selectElement;
    }

    return (
        <div className={styles.select}>
            <Select id="lng-select"
                    value={selectedLng}
                    onChange={onLanguageChanged || null}
                    onSelectRef={handleSelectRef}
                    options={Object.keys(languages).map(key => {
                        return {
                                value: key,
                                contents: languages[key as keyof TypeLanguages]
                            }
                        })
                    }
            />
            <button
                className={styles.lngButton}
                onClick={(event:React.MouseEvent<HTMLButtonElement>) => {
                    select?.click();
                }}
                tabIndex={-1}
            >
                {selectedLng}
            </button>
        </div>
    );
};

export default LngSelect;