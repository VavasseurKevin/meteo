import React, { useState } from "react";
import '../styles/VilleInput.css';

function VilleInput(props) {
    const [isVilleSet, setIsVilleSet] = useState(false);

    const onKeyDownHandler = (e) => {
        const eventKey = e.which ? e.which : e.keyCode;

        // Vérifie si la touche pressée est "Entrée" (keyCode 13)
        if (eventKey === 13) {
            // Vérifie si la valeur de l'entrée contient uniquement des lettres
            if (/^[a-zA-Z]+$/.test(e.target.value)) {
                props.setVille(e);
                setIsVilleSet(true);
                e.target.value = '';
                e.target.placeholder = 'Entrez une Ville...';
            } else {
                e.target.value = '';
                e.target.placeholder = 'Veuillez saisir un nom de ville valide...';
            }
        }
    }

    const style = {
        top: props.ville ? '-400px' : '50px',
        width: '600px',
        display: 'inline-block',
        padding: '15px 10px',
        lineHeight: '120%',
        position: 'relative',
        borderRadius: '20px',
        outline: 'none'
    }

    return (
        <input
            className="ville-input"
            style={style}
            type="text"
            placeholder="Entrez une ville..."
            onKeyDown={onKeyDownHandler}
        />
    );
}

export default VilleInput;
