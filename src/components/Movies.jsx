import React from "react";
import Movie from "./Movie";

function Movies(props) {
    const { movies =[] } = props;
    return (
        <div className={"movies"}>
            { movies.length ?
                (movies.map((movie) => (
                <Movie
                    key={movie.imdbID}
                    {...movie} //спред оператор,  развернул массив обьектов movie

                />
                ))) :
                <h4>Movie not found</h4>
            }
        </div>
    )
}
export default Movies;