/**
 * Created by cmontone on 4/24/17.
 */
import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return (
            <div className="form-group search-bar col-md-12">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}
                    className="form-control"
                    placeholder="Search Videos"
                />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;