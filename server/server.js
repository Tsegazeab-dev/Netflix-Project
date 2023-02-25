const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = '3333'
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(require('./routes'));
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));

