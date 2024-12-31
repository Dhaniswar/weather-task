
const express = require('express')
const router = express.Router();

// Mock database
const weatherData = [
    {
        "id": 1,
        "location_id": 1,
        "aqi": "Good",
        "description": "Air quality is not good in kathmandu today",
        "country": "England",
        "favouriteQuote": "The answer is 42"
    }
];

router.get('/', (req, res) => {
    res.send(weatherData);
})

export default router