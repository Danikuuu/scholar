const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/scrape', async (req, res) => {
    let { startPage = 1 } = req.query;
    const baseUrl = 'https://phscholarship.com/category/scholarships/page/';

    startPage = parseInt(startPage);

    if (isNaN(startPage)) {
        return res.status(400).json({ error: 'Invalid start page number provided' });
    }

    let currentPage = startPage;
    const results = [];

    try {
        while (true) {
            const url = `${baseUrl}${currentPage}/`;
            const { data } = await axios.get(url);
            const $ = cheerio.load(data);

            $('article').each((index, element) => {
                const title = $(element).find('p').text().trim()
                const link = $(element).find('a').attr('href');
                results.push({ title, link });
            });


            const nextPageExists = $('a.next').length > 0; 

            if (!nextPageExists) {
                break;
            }

            currentPage++;
        }

        res.json(results);
    } catch (error) {
        console.error('Scraping error:', error);
        res.status(500).json({ error: 'Failed to scrape the URL' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
