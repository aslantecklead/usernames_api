import express from 'express';
import usernamesRouter from './Queryies/requests.js';

const app = express();

app.use('/', usernamesRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
