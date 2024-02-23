import { useEffect, useState } from 'react';

function Clock() {
    const [date, setDate] = useState(new Date());

    // On fait le code suivant quand le composant est chargé
    useEffect(() => {
        let timer = setInterval(() => {
            console.log('call');
            setDate(new Date());
        }, 1000);

        // On fait ce code quand le composant est masqué
        return () => {
            clearInterval(timer);
            console.log('DESTRUCT');
        }
    }, []); // [] => On fait le useEffect UNE SEULE FOIS

    // On fait ce code quand l'horloge est mise à jour
    useEffect(() => {
        console.log('UPDATE', date);

        if (date.getSeconds() % 10 === 0) {
            console.log('DING DONG');
        }

        return () => {
            console.log('UPDATE 2', date);
        }
    }, [date]); // On fait l'effect qu'au changement du state date

    return (
        <h1>{date.toLocaleTimeString()}</h1>
    );
}

export default Clock;
