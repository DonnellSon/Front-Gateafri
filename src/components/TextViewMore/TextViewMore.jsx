import { useState } from "react";
import './TextViewMore.scss'

function limiterPhrase(phrase, limiteMots=50) {
    const mots = phrase.split(' ');
    const phraseLimite = mots.slice(0, limiteMots).join(' ');
    return phraseLimite;
}

const TextViewMore = ({ children,limiteMot }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore((toogle)=>!toogle);
    };
    const tronquerTexte = (texte) => {
        return limiterPhrase(texte, limiteMot);
    };
    const textStyle = {
        transition: 'max-height 0.3s ease-out',
        overflow: 'hidden',
        maxHeight: isReadMore ? '100px' : '100%', // Ajustez la valeur de maxHeight selon vos besoins
    };
    return (
        <p className="text" style={textStyle}>
            {isReadMore ? tronquerTexte(text) : text}
            <span
                onClick={toggleReadMore}
                className="read-or-hide"
            >
                {isReadMore ? "...voir plus" : " voir moin"}
            </span>
        </p>
    );
};
export default TextViewMore;