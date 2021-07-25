import { Component } from 'react';
import SearchBar from './components/SearchBar';
import Modal from './components/Modal';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
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
        isLoading: false,
        error: null,
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
            error: null,
        });
    };

    fetchImages = () => {
        const { currentPage, searchQuery } = this.state;
        // const loadMoreBtn = document.querySelector('.loadMoreBtn");

        this.setState({ isLoading: true });

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

                window.scrollTo({
                    top: document.querySelector('.ImageGallery').scrollHeight,
                    behavior: 'smooth',
                });
            })
            .catch(error => this.setState({ error: error }))
            .finally(() => this.setState({ isLoading: false }));
    };

    toggleModal = () => {
        this.setState(state => ({
            showModal: !state.showModal,
        }));
    };

    render() {
        const { showModal, imageGallery, isLoading, error } = this.state;
        const shouldRenderLoadMoreBtn = imageGallery.length > 0 && !isLoading;

        return (
            <div className="App">
                <SearchBar onSubmit={this.inputSubmit} />
                {showModal && (
                    <Modal onClose={this.toggleModal}>
                        <img src="" alt="" />
                        <p>Modal window</p>
                    </Modal>
                )}

                {error && (
                    <h2 style={{ color: 'rgba(253, 29, 29, 1)' }}>
                        Something went wrong. Please, try again!
                    </h2>
                )}

                <ImageGallery gallery={imageGallery} />

                {isLoading && (
                    <Loader
                        className="Loader"
                        type="MutatingDots"
                        color="rgba(253, 29, 29, 1)"
                        secondaryColor="rgba(252, 176, 69, 1)"
                        height={100}
                        width={100}
                    />
                )}

                {shouldRenderLoadMoreBtn && (
                    <Button onClick={this.fetchImages} />
                )}
            </div>
        );
    }
}

App.defaultProps = {};

App.propTypes = {};

export default App;
