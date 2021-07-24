import { Component } from 'react';
import SearchBar from './components/SearchBar';
import Modal from './components/Modal';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import axios from 'axios';
// import PropTypes from 'prop-types';
// import { v4 as uuidv4 } from 'uuid';
// import './styles.css';

const BASE_URL = 'https://pixabay.com/api/';
const LOG = '21433732-4f4ab4e06b98cffafd914747a';

class App extends Component {
    state = {
        input: '',
        showModal: false,
        imageGallery: [],
        currentPage: 1,
        searchQuery: '',
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchQuery !== this.state.searchQuery) {
            this.fetchImages();
        }
    }

    inputSubmit = ({ inputValue }) => {
        // event.preventDefault();
        console.log(inputValue);
        this.setState({
            searchQuery: inputValue,
            currentPage: 1,
            imageGallery: [],
        });
    };

    fetchImages = () => {
        const { currentPage, searchQuery } = this.state;

        axios
            .get(
                `${BASE_URL}?q=${searchQuery}&page=${currentPage}&key=${LOG}&image_type=photo&orientation=horizontal&per_page=12`,
            )
            .then(response => {
                this.setState(prevState => ({
                    imageGallery: [
                        ...prevState.imageGallery,
                        ...response.data.hits,
                    ],
                    currentPage: prevState.currentPage + 1,
                }));
            });
    };

    toggleModal = () => {
        this.setState(state => ({
            showModal: !state.showModal,
        }));
    };

    render() {
        const { showModal, imageGallery } = this.state;

        return (
            <div className="App">
                <SearchBar onSubmit={this.inputSubmit} />
                {showModal && (
                    <Modal onClose={this.toggleModal}>
                        <img src="" alt="" />
                        <p>Modal window</p>
                    </Modal>
                )}
                <ImageGallery gallery={imageGallery} />
                {imageGallery.length > 0 && (
                    <Button onClick={this.fetchImages} />
                )}
            </div>
        );
    }
}

App.defaultProps = {};

App.propTypes = {};

export default App;
