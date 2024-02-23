import { useState } from 'react';
import Ajax from '../Ajax';
import Clock from '../Clock';
import Ajax1 from '../exercices/Ajax1';
import Lifecycle2 from '../exercices/Lifecycle2';
import LifecycleChallenge from '../exercices/LifecycleChallenge';

function ExoLifecycle() {
    const [show, setShow] = useState(true);

    return (
        <>
            <h2>Cycle de vie</h2>
            {show && <Clock />}
            <button onClick={() => setShow(!show)}>Afficher</button>

            <h2>Ajax et API</h2>
            <Ajax />
            <h2>Exo cycle de vie et ajax</h2>
            <Lifecycle2 />
            <LifecycleChallenge />
            <Ajax1 />
        </>
    );
}

export default ExoLifecycle;
