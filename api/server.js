require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.API_PORT || 5000;

app.get('/', (req, res) => res.status(200).json({ msg: 'Hi there' }));

app.listen(port, () => console.log(`Server is running on PORT: ${port}`));