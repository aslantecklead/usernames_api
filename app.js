import express from 'express';
import cors from 'cors';
import usernamesRouter from './Queryies/requests.js';
import { collectDefaultMetrics, register } from "prom-client";

collectDefaultMetrics();
const app = express();
app.use(cors());
app.use(express.json());


app.use('/', usernamesRouter);

app.get('/metrics', async (_req, res) => {
   try {
       res.set('Content-Type', register.contentType);
       res.end(await register.metrics());
   } catch (err) {
       res.status(500);
   }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});