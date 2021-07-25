import ImageGalleryItem from '../ImageGalleryItem';
import PropTypes from 'prop-types';
import './ImageGallery.css';

const ImageGallery = ({ gallery, onImgClick }) => (
    <ul className="ImageGallery">
        {gallery.map(({ id, webformatURL, largeImageURL, tags }) => (
            <ImageGalleryItem
                key={id}
                id={id}
                webformatURL={webformatURL}
                tags={tags}
                onImgClick={() => onImgClick(largeImageURL, tags)}
            />
        ))}
    </ul>
);

ImageGallery.propTypes = {
    gallery: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            largeImageURL: PropTypes.string.isRequired,
        }),
    ).isRequired,
    onImgClick: PropTypes.func.isRequired,
};

export default ImageGallery;
