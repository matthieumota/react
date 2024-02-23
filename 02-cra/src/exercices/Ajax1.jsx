import { useEffect, useState } from 'react';
import axios from 'axios';

function Example() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        // Avec fetch pour les puristes
        // fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
        //   .then(response => setUsers(response));

        axios.get('https://jsonplaceholder.typicode.com/users').then(response => setUsers(response.data));
    };

    return (
        <ul>
            {users.map((user) => <li key={user.id}>{user.name}</li>)}
        </ul>
    );
}

function Posts() {
    const [posts, setPosts] = useState([]);

    const fetchPosts = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10').then((response) => {
            setPosts([ ...posts, ...response.data ]);
        });
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <>
            <ul>
                {posts.map(post =>
                    <li key={post.id}>{post.title}</li>    
                )}
            </ul>
            <button onClick={fetchPosts}>Refresh</button>
        </>
    );
}

function Cats() {
    const [cats, setCats] = useState([]);

    const fetchCats = async () => {
        let response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10');

        setCats(response.data);
    }

    useEffect(() => {
        fetchCats();
    }, []);

    return (
        <>
            <ul>
                {cats.map(cat =>
                    <img key={cat.id} src={cat.url} width={100} />    
                )}
            </ul>
        </>
    );
}

function Photos() {
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${page}`).then((response) => {
            setPhotos([ ...photos, ...response.data ]);
        });
    }, [page]);
    // La magie du useEffect fait que le changement du state page (juste +1) va provoquer l'exécution de l'effet donc
    // le chargement des pages supplémentaires

    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {photos.map(photo =>
                    <div>
                        <img src={photo.url} width={150} />
                    </div>    
                )}
            </div>
            <button onClick={() => setPage(page + 1)}>Plus de photos</button>
        </>
    );
}

function Ajax1() {
    return (
        <div>
            <p>Voici un exemple où on va récupèrer des données sur une API en AJAX</p>
            <Example />

            <p>Créer un composant Posts qui va chercher des articles sur https://jsonplaceholder.typicode.com/posts</p>
            <p>Ajouter un bouton dans ce composant qui va chercher à nouveau les articles et les ajoute à la liste (Peu importe si on a des doublons)</p>
            <Posts />

            <p>Créer un composant Cats qui va afficher 10 images aléatoires de chats avec l'API https://developers.thecatapi.com</p>
            <Cats />

            <p>Créer un composant Photos qui va chercher des images sur https://jsonplaceholder.typicode.com/photos</p>
            <p>Attention, on limitera le nombre de résultats à 10 par défaut (sur les 5000)</p>
            <p>Ajouter un bouton dans ce composant qui va chercher les 10 prochaines photos et les ajoute à la liste</p>
            <Photos />
        </div>
    );
}

export default Ajax1;
