import React from "react";
import '../styles/VilleInput.css';

function VilleInput(props) {
    const onKeyDownHandler = async (e) => {
        e.persist();
        const eventKey = e.which ? e.which : e.keyCode;
        const ville = e.target.value;

        if (eventKey === 13) {
            if (/^[a-zA-ZäöüÄÖÜß ]+$/.test(ville)) {
                e.target.placeholder = 'Recherche en cours...';
                e.target.classList.add('loading');

                if (await props.getMeteo(ville))
                    e.target.placeholder = 'Entrez une Ville...';
                else
                    e.target.placeholder = "La ville n'a pas été trouvée, réessayez...";
                    e.target.classList.remove('loading');
                    e.target.value = '';
            }
            else
                e.target.placeholder = 'Veuillez saisir un nom de ville valide...'; 
            e.target.classList.remove('loading');
            e.target.value = '';
        }
    }
    const style = {
        top: props.ville ? '-380px' : '50px',
        width: '600px',
        display: 'inline-block',
        padding: '10px 0px 10px 30px',
        lineHeight: '120%',
        position: 'relative',
        borderRadius: '20px',
        outline: 'none',
        fontSize: '20px'
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
