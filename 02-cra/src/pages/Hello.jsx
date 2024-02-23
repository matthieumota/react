import { useParams } from 'react-router-dom';

function Hello() {
    // useParams est un hook utilisable uniquement
    // dans les composants fonctionnels
    // (pas dans une classe)
    const { name } = useParams();

    return (
        <h1>Bonjour {name}</h1>
    );
}

export default Hello;
