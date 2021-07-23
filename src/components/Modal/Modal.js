import { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
        // window.addEventListener('click', (e) => {this.props.onClick()})
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = event => {
        if (event.code === 'Escape') {
            this.props.onClose();
        }
    };

    handleBackdropClick = event => {
        if (event.target === event.currentTarget) {
            this.props.onClose();
        }
    };

    // handleClick = (event) => {
    //     if event
    // }

    render() {
        return createPortal(
            <div className="Overlay" onClick={this.handleBackdropClick}>
                <div className="Modal">{this.props.children}</div>
            </div>,
            modalRoot,
        );
    }
}

export default Modal;
