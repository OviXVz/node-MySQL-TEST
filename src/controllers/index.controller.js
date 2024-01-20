

import { pool } from '../db.js'

export const getPing = async (req, res) => {
    try {
        const [result] = await pool.query('select 1 + 1 AS result');
        res.json(result[0]);
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}