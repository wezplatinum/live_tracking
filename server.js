require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.get('/flights', async (req, res) => {
  const flightData = await fetchFlightData();
  res.json(flightData);
});

async function fetchFlightData() {
  const apiKey = process.env.FLIGHT_TRACKING_API_KEY;
  const response = await fetch(`b1cbe8af3fmshb7b5f3f79e730f4p160c2djsn36c363735fb6?apiKey=${apiKey}`);
  const data = await response.json();
  return data;
}

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
