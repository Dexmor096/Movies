import React, {useState} from 'react'

function Search(props) {
    const {searchFilm} = props;
const [type, setType] = useState('');
const [value, setValue] = useState('');

    const handleSearch = (event) => {
        if (event.key === "Enter") {
            searchFilm(value, type)
        }
    }

    const radioChange = (event) => {
        setType(event.target.value);
        searchFilm(value, event.target.value)
    }

    const handleChange = (event) => {
        setValue(event.target.value)
    }

        return (
            <div className="row">
                <div className="col s12">
                    <div className="input-field">
                        <input
                            className="validate search-input"
                            id="search"
                            type="search"
                            value={value}
                            onKeyDown={handleSearch}
                            onChange={handleChange}
                        />
                        <button
                            className="button btn right search-button"
                            onClick={() => searchFilm(value, type)}

                        >Search
                        </button>
                    </div>
                </div>
                    <label>
                        <input
                            className="with-gap"
                            name="group1"
                            type="radio"
                            onChange={radioChange}
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
                            onChange={radioChange}
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
                            onChange={radioChange}
                            value={"series"}
                        />
                        <span>Serial only</span>
                    </label>
            </div>


        )
}

export default Search;