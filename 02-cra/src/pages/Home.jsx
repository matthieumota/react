import { useState } from 'react';

const Header = ({ count }) => <h1>{count} utilisateurs</h1>;

const List = ({ data, onDelete }) => (
    <ul>
        {data.map((item, index) =>
            <Item key={index} element={item} surClic={() => onDelete(item)} />
        )}
    </ul>
);

const Item = ({ element, surClic }) => <li onClick={() => surClic()}>{element}</li>;

function Home() {
    const [names, setNames] = useState(['Fiorella', 'Toto', 'Titi']);

    const removeName = (name) => {
        setNames(names.filter(n => n !== name));
    }

    return (
        <>
            <Header count={names.length} />
            <List data={names} onDelete={(e) => removeName(e)} />
        </>
    );
}

export default Home;
