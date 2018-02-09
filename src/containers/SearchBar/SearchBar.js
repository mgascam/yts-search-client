import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTorrent } from "../../actions";

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onInputChange(event) {
        this.setState({term: event.target.value})
    }
    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchTorrent(this.state.term);
        this.setState({term: ''});
    }
    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input placeholder="Search for a movie"
                    onChange={this.onInputChange}
                    className="form-control"
                   value={this.state.term}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-primary">Send</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( { fetchTorrent }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);