import { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

class SearchBar extends Component {
    state = {
        inputValue: '',
    };

    inputValueHandler = event => {
        this.setState({ inputValue: event.target.value });
    };

    formSbmitHandler = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    };

    render() {
        return (
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={this.formSbmitHandler}>
                    <button type="submit" className="SearchForm-button">
                        <span className="SearchForm-button-label">Search</span>
                    </button>

                    <input
                        className="SearchForm-input"
                        type="text"
                        autoComplete="off"
                        value={this.state.inputValue}
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.inputValueHandler}
                    />
                </form>
            </header>
        );
    }
}

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
