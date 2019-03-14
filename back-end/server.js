import 'dotenv/config';


import express from 'express';
const app = express();
import bodyParser from 'body-parser';
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());



app.listen(PORT, () => console.log(`App running on port ${PORT}`));