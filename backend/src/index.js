const express = require('express')
const app = express();
const Cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT | 5000;

app.use(Cors());
app.use(express.json());
app.use('/checkDrugs', require('../routers/AppFetchDrugs'));

app.listen(PORT, () => {
    console.log(`app is running on port ${PORT}`);
})