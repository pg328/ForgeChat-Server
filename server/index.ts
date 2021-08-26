import express from 'express';
import cors from 'cors';
import pool from './db';

const app = express();

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.get('/', async (_, res) => {
    const allMessages = await pool.query('SELECT * FROM message');
    res.json(allMessages.rows);
});

app.post('/newMessage', async (req, res) => {
    const {content: messageContent} = req.body;
    const newMessage = await pool.query('INSERT INTO message (content) VALUES ($1) RETURNING *', messageContent);
    res.json(newMessage.rows[0]);
});

app.listen(PORT, () => {
    console.log(`ForgeChat Server is running on port ${PORT}`);
});
