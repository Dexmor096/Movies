import React from "react";

function Movie(props) {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props;

    return (
        <div className="card">
            <div className="card-image medium card">
                {
                    poster === "N/A"
                        ?
                <img className="activator" src={`https://via.placeholder.com/250/#9e9e9e/808080 ?Text=${title}`}/>
                        :
                <img className="activator" src={poster}/>
                }
            </div>
            <div className="card-content">
                <span className="card-title">{title}</span>
                <p>{year}<span className={"right"}>{type}</span> </p>
            </div>
        </div>
    )
}
export default Movie;
