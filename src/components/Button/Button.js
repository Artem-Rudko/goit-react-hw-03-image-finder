import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ onClick }) => {
    return (
        <button type="button" className="loadMoreBtn button" onClick={onClick}>
            Load more
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default Button;
