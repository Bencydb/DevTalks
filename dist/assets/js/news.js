const axios = require('axios');

module.exports = async function() {
    const apiUrl = 'https://newsapi.org/v2/top-headlines?category=technology&apiKey=d013c6f8742141b580cfbe36a2a20c3c';
    try {
        const response = await axios.get(apiUrl);
        console.log('Fetched Articles:', response.data.articles); // Log the response data
        return { articles: response.data.articles };
    } catch (error) {
        console.error('Error fetching news:', error);
        return { articles: [] };  // Return an empty array in case of error
    }
};
