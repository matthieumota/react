import Button from '../Button';
import List from '../List';
import EventListener3 from '../exercices/EventListener3';
import State2 from '../exercices/State2';
import State3 from '../exercices/State3';
import StateChallenge from '../exercices/StateChallenge';

function ExoState() {
    return (
        <>
            <h1>React</h1>
            <Button>Envoyer</Button>
            <Button>Contacter</Button>

            <List />

            <h2>Exo state</h2>
            <State2 />
            <State3 />
            <StateChallenge />
            <h2>Exo listener</h2>
            <EventListener3 />
        </>
    );
}

export default ExoState;
