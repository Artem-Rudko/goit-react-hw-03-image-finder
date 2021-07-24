import './ImageGalleryItem.css';

const ImageGalleryItem = ({ id, webformatURL, largeImageURL }) => (
    <li key={id} className="ImageGalleryItem">
        <img src={webformatURL} alt="" className="ImageGalleryItem-image" />
    </li>
);

export default ImageGalleryItem;
