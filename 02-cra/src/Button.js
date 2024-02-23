import { useState } from 'react';

function Button({ children }) {
    const [enabled, setEnabled] = useState(false);
    const [name, setName] = useState('');
    const toggle = () => {
        setEnabled(!enabled);
        setName(Math.random());
        // alert(!enabled);
    }

    const toggleName = () => {
        setName('Toto');
    }

    const toggleName2 = (name) => {
        setName(name);
    }

    return (
        <div>
            <button onClick={() => toggle()}>
                {children} {enabled && 'V'} {name}
            </button>

            {/* Syntaxe pour les fonctions d'événements */}
            <button onClick={() => setName('Fiorella')}>Changer nom</button>
            <button onClick={toggleName}>Changer 2</button>
            <button onClick={() => toggleName2('Titi')}>Changer 3</button>
            <button onClick={toggleName2.bind(this, 'Tata')}>Changer 4</button>

            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    );
}

export default Button;
