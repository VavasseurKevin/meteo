import React, { useState } from "react";
import '../styles/VilleInput.css';

function VilleInput(props) {

    const onKeyDownHandler = async (e) => {
        const ville = e.target.value;

        // Vérifie si la touche pressée est "Entrée" (keyCode 13)
        if (e.key === "Enter") {
            // Vérifie si la valeur de l'entrée contient uniquement des lettres
            if (/^[a-zA-Z]+$/.test(ville)) {
                // Appelez la fonction de récupération de la météo via les props
                if (await props.getMeteo(ville)) {
                    e.target.placeholder = 'Entrez une Ville...';
                    props.setVille(ville);
                    e.target.value = '';
                    
                    console.log(ville);
                } else {
                    e.target.placeholder = "La ville n'a pas été trouvée, réessayez...";
                    e.target.value = '';
                }
            } else {
                e.target.placeholder = 'Veuillez saisir un nom de ville valide...';
                e.target.value = '';
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
