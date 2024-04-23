import { useState } from "react";
import './TextViewMore.scss'

function limiterPhrase(phrase, limiteMots) {
    const mots = phrase.split(' ');
    const phraseLimite = mots.slice(0, limiteMots).join(' ');
    return phraseLimite;
}

const TextViewMore = ({ children, limiteMot = 50 }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore((toogle) => !toogle);
    };
    const tronquerTexte = (texte) => {
        return limiterPhrase(texte, limiteMot);
    };

    // Vérifie si le texte est plus long que la limite de mots
    const isTextLongerThanLimit = text.split(' ').length > limiteMot;

    return (
        <p className="text">
            {isReadMore ? tronquerTexte(text) : text}
            {isTextLongerThanLimit && (
                <span
                    onClick={toggleReadMore}
                    className="read-or-hide"
                >
                    {isReadMore ? "...voir plus" : " voir moin"}
                </span>
            )}
        </p>
    );
};

export default TextViewMore;
