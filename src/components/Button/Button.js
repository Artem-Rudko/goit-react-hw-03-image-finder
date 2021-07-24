import './Button.css';

const Button = ({ onClick }) => {
    return (
        <button type="button" className="loadMoreBtn button" onClick={onClick}>
            Load more
        </button>
    );
};

export default Button;
