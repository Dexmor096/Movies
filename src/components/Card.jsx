import React from "react";

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }

    render() {
        const {
            Type: type,
            Year: year,
            Poster: poster,
            Title: title
        } = this.props;

        return (
            <div className="row">
                <div className="col s12 m12">
                    <div className="card">
                        <div className="card-image">
                            <img src={this.props.poster}/>
                        </div>
                        <div className="card-content">
                            <span className="card-title">{this.props.title}</span>
                            <p>{this.props.type}<span className={"right"}>{this.props.year}</span></p>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;