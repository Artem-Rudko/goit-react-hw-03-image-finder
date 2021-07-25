import PropTypes from 'prop-types';
import './ImageGalleryItem.css';

const ImageGalleryItem = ({ id, webformatURL, tags, onImgClick }) => (
    <li key={id} className="ImageGalleryItem">
        <img
            src={webformatURL}
            alt={tags}
            className="ImageGalleryItem-image"
            onClick={onImgClick}
        />
    </li>
);

ImageGalleryItem.defaultProps = {
    tags: 'some img',
};

ImageGalleryItem.propTypes = {
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
    onImgClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
