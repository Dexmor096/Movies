import React from 'react'

class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        type: '',
        value: ''
    }
    handleChange = (event) => {
        this.setState({value: event.target.value})
    }
    radioChange = (event) => {
        this.setState({type: event.target.value})
    }
    handleSearch = (event) => {
        if (event.key === "Enter") {
            this.props.searchFilm(this.state.value, this.state.type)
        }
    }

    render() {
        const {type} = this.state;
        return (
            <div className="row">
                <div className="col s12">
                    <div className="input-field">
                        <input
                            id="email_inline"
                            type="email"
                            className="validate"
                            id="search"
                            type="search"
                            value={this.state.value}
                            onKeyDown={this.handleSearch}
                            onChange={this.handleChange}
                        />
                        <button
                            className="button btn center search-button"
                            onClick={() => this.props.searchFilm(this.state.value, this.state.type)}

                        >Search
                        </button>
                        <label htmlFor="email_inline">Search</label>
                    </div>
                </div>
                    <label>
                        <input
                            className="with-gap"
                            name="group1"
                            type="radio"
                            onChange={this.radioChange}
                            checked={type === ''}
                            value={''}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="group1"
                            type="radio"
                            checked={type === 'movie'}
                            onChange={this.radioChange}
                            value={"movie"}
                        />
                        <span>Movies only</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="group1"
                            type="radio"
                            checked={type === 'series'}
                            onChange={this.radioChange}
                            // onClick={this.handleCheck}
                            value={"series"}
                        />
                        <span>Serial only</span>
                    </label>
            </div>


        )
    }
}

export default Search;