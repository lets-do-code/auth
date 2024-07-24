import express from 'express';
import { DbConnection } from './DbConnection.js';

const app = express();

app.use(express.json());

const PORT = 8000;


// mongodb connection

DbConnection("mongodb://localhost:27017/nannu")

// import route

import authRoute from "./routes/auth.js"
app.use('/api', authRoute);


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
});

