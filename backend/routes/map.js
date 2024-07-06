import express from 'express'
const router = express.Router();
import fetch from 'node-fetch';
const apiKey = process.env.GOOGLE_API_KEY; // Replace with your actual Google Places API key

router.get('/', async (req, res) => {
  const { latitude, longitude } = req.query;
  const radius = 50000; // Search radius in meters
  const type = 'gym'; // Adjust based on your needs

  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=${type}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    res.json(data);
  } catch (error) {
    console.error('Error fetching nearby shops:', error);
    res.status(500).json({ error: 'Failed to fetch nearby shops' });
  }
});

export default router
