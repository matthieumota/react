import { useDispatch, useSelector } from 'react-redux';
import { addName, deleteName } from '../store';

const Header = () => {
    const names = useSelector(state => state.names);

    return (
        <h1>{names.length} utilisateurs</h1>
    );
}

const List = () => {
    const names = useSelector(state => state.names);

    return (
        <ul>
            {names.map((name, index) =>
                <Item key={index} element={name} />
            )}
        </ul>
    );
}

const Item = ({ element }) => {
    const dispatch = useDispatch();

    return <li onClick={() => dispatch(deleteName(element))}>
        {element}
    </li>;
};

function About() {
    // Permet de dispatcher des action sur le store
    const dispatch = useDispatch();

    return (
        <>
            <Header />
            <List />
            <button onClick={() => dispatch(addName('Test'))}>
                Ajouter
            </button>
        </>
    );
}

export default About;
