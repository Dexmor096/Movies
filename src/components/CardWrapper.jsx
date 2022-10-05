import React from "react";
import Card from "./Card";

class CardWrapper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }

    componentDidMount() {
        fetch("https://www.omdbapi.com/?apikey=a4f876b3&s=marvel&page=1")
            .then(response => response.json())
            .then(
                (data) => {
                    this.setState({
                        isLoaded: true,
                        items: data.Search
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            );
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <p>Error {error.message}</p>
        }
        if (!isLoaded) {
            return <p>Loading...</p>
        } else {
            return (
                <>
                    {items.map((item) => (
                        <Card
                            key={item.imdbID}
                            type={item.Type}
                            year={item.Year}
                            title={item.Title}
                            poster={item.Poster}
                        />
                    ))}
                </>
            )
        }
    }
}

export default CardWrapper;