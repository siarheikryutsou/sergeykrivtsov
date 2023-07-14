import {createContext} from "react";
import {TypeLanguages, TypeTranslations} from "../shared/types/types";

interface IContextLng  {
    selectedLng:string,
    languages:TypeLanguages,
    translations:TypeTranslations | null,
    onLanguageChanged:Function | null
}

const languages:TypeLanguages = {
    en: "English",
    ru: "Русский",
    uk: "Українська",
    sr: "Srpski"
}

export const ContextLng = createContext<IContextLng>({
    selectedLng: "",
    languages: languages,
    translations: null,
    onLanguageChanged: null
});