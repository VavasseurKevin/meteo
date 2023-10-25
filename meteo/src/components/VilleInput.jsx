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

    return (
        <input
            className="ville-input"
            style={{ top: props.ville ? '-400px' : '78px' }}
            type="text"
            placeholder="Entrez une ville..."
            onKeyDown={onKeyDownHandler}
        />
    );
}

export default VilleInput;
