import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const LOG = '21433732-4f4ab4e06b98cffafd914747a';

const getImages = (currentPage, searchQuery) => {
    return axios.get(
        `${BASE_URL}?q=${searchQuery}&page=${currentPage}&key=${LOG}&image_type=photo&orientation=horizontal&per_page=12`,
    );
};

export { getImages };
