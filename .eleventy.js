const axios = require('axios');

module.exports = function(eleventyConfig) {
    eleventyConfig.addNunjucksFilter("formatDate", function(date) {
        if (!date) return ""; // Handle invalid date values
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
    });


    eleventyConfig.addPassthroughCopy("src/assets");


    eleventyConfig.addGlobalData("devtalks", async () => {
        try {
            const response = await axios.get("http://localhost:1337/api/devtalks");
            return response.data.data;
        } catch (error) {
            console.error("Error fetching devtalks from Strapi:", error);
            return [];
        }
    });


    return {
        dir: {
            input: 'src',
            output: 'dist'
        },
        templateFormats: ['njk', 'md'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
    };
};
