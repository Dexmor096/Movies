import React, {useEffect, useState} from "react";
import Movies from '../components/Movies';
import Preloader from '../components/Preloader'
// import Search from '../components/Search';
import SearchF from '../components/SearchF';

function MainF() {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const searchFilm = (filmName, type) => {
        setLoading(true)
        fetch(`https://www.omdbapi.com/?apikey=a4f876b3&s=${filmName ? filmName: "marvel"}&page=1&type=${type}`)
            .then(response => response.json())
            .then((data) => {
                    setMovies(data.Search);
                    setLoading(true);
                }
            )
    }

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=a4f876b3&s=marvel&page=2&type=`)
            .then(response => response.json())
            .then((data) => {
                    setMovies(data.Search);
                    setLoading(true);
                }
            )
    }, [])

    return <div>
        <SearchF
            searchFilm={searchFilm}
        />
        {
            !loading ? (
                <Preloader/>
            ) : (
                <Movies movies={movies}/>
            )
        }
    </div>
};

export default MainF;