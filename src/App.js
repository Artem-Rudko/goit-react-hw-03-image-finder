import { Component } from 'react';
import SearchBar from './components/SearchBar';
import Modal from './components/Modal';
// import PropTypes from 'prop-types';
// import { v4 as uuidv4 } from 'uuid';
// import './styles.css';

class App extends Component {
    state = {
        input: '',
        showModal: true,
    };

    inputSubmit = data => {
        // event.preventDefault();
        console.log(data);
        // this.setState(event.target.value)
    };

    toggleModal = () => {
        this.setState(state => ({
            showModal: !state.showModal,
        }));
    };

    render() {
        const { showModal } = this.state;

        return (
            <div className="App">
                <SearchBar onSubmit={this.inputSubmit} />
                {showModal && (
                    <Modal onClose={this.toggleModal}>
                        <img src="" alt="" />
                        <p>Modal window</p>
                    </Modal>
                )}
            </div>
        );
    }
}
App.defaultProps = {};

App.propTypes = {};

export default App;
