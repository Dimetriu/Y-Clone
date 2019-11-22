require('dotenv').config();
const express = require('express');
const cors = require('cors');
// Logging middleware
const httpLogger = require('./middlewares/httpLogger');
const logger = require('./utils/logger');

const whiteList = ['http://localhost:3000'];

const corsOPtionsDelegate = (req, callback) => {
  let corsOptions;

  if (whiteList.indexOf(req.header('Origin')) !== -1) {
    corsOPtions = { origin: true };
  } else {
    corsOPtions = { origin: false };
  }

  callback(null, corsOptions);
};

const app = express();
const port = process.env.API_PORT || 5000;

// Middlewares
app.use(httpLogger);

app.get('/', cors(corsOPtionsDelegate), (req, res, next) => res.status(200).json({ msg: 'Hi there' }));

app.listen(port, () => console.log(`Server is running on PORT: ${port}`));