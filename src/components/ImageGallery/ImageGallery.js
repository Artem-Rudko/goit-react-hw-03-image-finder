import ImageGalleryItem from '../ImageGalleryItem';
import './ImageGallery.css';

const ImageGallery = ({ gallery }) => (
    <ul className="ImageGallery">
        {gallery.map(({ id, webformatURL, largeImageURL }) => (
            <ImageGalleryItem
                key={id}
                id={id}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
            />
        ))}
    </ul>
);

export default ImageGallery;
