import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 6WVCtif36C2uGCHdGfdsWcWqGZkDbex2Mze3iK45z7U'
        },
        params: {
            query: term,
        }
    });

    return response.data.results;
};

export default searchImages;