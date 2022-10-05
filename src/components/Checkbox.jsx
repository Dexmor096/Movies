import React from 'react'

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        value:''
    }
    handleChange = (event) => {
        this.setState({value: event.target.value})
        this.props.typeFilm(this.state.value,this.props.value)
    }
    handleCheck = () => {
    }
    render() {
        const {value} = this.state;
        return (
            <form className="checkbox"
                  action="#">
                <p>
                    <label>
                        <input
                            className="with-gap"
                            name="group1"
                            type="radio"
                            onChange={this.handleChange}
                            checked={value === ''}
                            value={''}
                        />
                        <span>All</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input
                            className="with-gap"
                            name="group1"
                            type="radio"
                            checked={value === 'movie'}
                            onChange={this.handleChange}
                            value={"movie"}
                        />
                        <span>Movies only</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input
                            className="with-gap"
                            name="group1"
                            type="radio"
                            checked={value === 'series'}
                            onChange={this.handleChange}
                            // onClick={this.handleCheck}
                            value={"series"}
                        />
                        <span>Serial only</span>
                    </label>
                </p>
            </form>
        )
    }
}
export default Checkbox;