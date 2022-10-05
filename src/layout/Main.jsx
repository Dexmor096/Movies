import React from "react";
//import CardWrapper from "../components/CardWrapper"
import Movies from '../components/Movies';
import Preloader from '../components/Preloader'
import Search from '../components/Search';

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            value: '',
            Loading: 'true'
        }
    }

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=a4f876b3&s=marvel&page=2&type=`)
            .then(response => response.json())
            .then(
                (data) => {
                    this.setState({movies: data.Search, loading: 'false'});
                }
            )
    }

    searchFilm = (filmName, type) => {
        this.setState({loading: true})
        fetch(`https://www.omdbapi.com/?apikey=a4f876b3&s=${filmName}&page=1&type=${type}`)
            .then(response => response.json())
            .then(
                (data) => {
                    this.setState({movies: data.Search, loading: 'false'});
                }
            )
    }

    render() {
        const {movies, loading} = this.state;
        return <div>
            <Search
                searchFilm={this.searchFilm}
            />
            {
                !loading ? (
                    <Preloader/>
                    ):(
                    <Movies movies={movies}/>
                )
            }
        </div>
    }
};

export default Main;