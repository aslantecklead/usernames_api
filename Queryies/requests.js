import express from 'express';
import {addNewName, deleteAllNames, getAllNames} from './database.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const usernames = await getAllNames();
        res.json(usernames);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

router.post('/addName', async (req, res) => {
    try {
        const { username, registeredAt } = req.body;
        const result = await addNewName(username, registeredAt);
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

router.delete('/deleteAll', async (req, res) => {
    try {
        const result = await deleteAllNames();
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

export default router;
