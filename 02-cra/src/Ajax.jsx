import axios from 'axios';
import { useEffect, useState } from 'react';

function Ajax() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        axios.get('https://api.vueflix.boxydev.com/movies').then((response) => {
            setTimeout(() => {
                setLoading(false);
                setMovies(response.data);
            }, 2000);
        }).catch((error) => {
            setHasError(true);
        });
    }, []);

    return (
        <>
            <h2>Films ({movies.length})</h2>
            {loading && !hasError && <div style={{ textAlign: 'center' }}>Chargement...</div>}
            {hasError && <div>Désolé, l'API n'est pas disponible...</div>}
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {movies.map(movie =>
                    <div key={movie.id} style={{ width: '25%' }}>
                        <h2>{movie.title}</h2>
                        <img src={movie.poster_path} width={150} alt={movie.title} />
                    </div>
                )}
            </div>
        </>
    );
}

export default Ajax;
