import React, {useContext} from 'react';
import {ContextLng} from "../../../app/ContextLng";
import Select from "../select/Select";
import {TypeLanguages} from "../../types/types";

const LngSelect = () => {

    const {selectedLng, languages, onLanguageChanged} = useContext(ContextLng);


    return (
        <div>
            <Select id="select"
                    value={selectedLng}
                    onChange={onLanguageChanged || null}
                    options={Object.keys(languages).map(key => {
                        return {
                                value: key,
                                contents: languages[key as keyof TypeLanguages]
                            }
                        })
                    }
            />
        </div>
    );
};

export default LngSelect;