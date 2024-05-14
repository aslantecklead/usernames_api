import express from 'express';
import getAllNotes from '../Queryies/database.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const usernames = await getAllNotes();
        res.json(usernames);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

export default router;
