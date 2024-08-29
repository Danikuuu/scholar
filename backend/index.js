const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();

// CORS Configuration
app.use(cors({
    origin: "https://scholar-sigma.vercel.app",
    methods: ["POST", "GET"],
    credentials: true
}));

// Additional CORS Headers for Debugging
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://scholar-sigma.vercel.app");
    res.header("Access-Control-Allow-Methods", "GET, POST");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

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
                const title = $(element).find('p').text().trim();
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

// Vercel handles the port, so no need to specify it
app.listen(() => {
    console.log(`Server is running on Vercel.`);
});
