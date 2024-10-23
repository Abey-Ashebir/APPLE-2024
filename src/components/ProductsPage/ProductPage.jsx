import express from 'express';
import { createConnection } from 'mysql';
import cors from 'cors';

const app = express();
app.use(cors());  // Enable CORS to allow requests from React

// MySQL database connection
const db = createConnection({
    host: 'localhost',  // Replace with your DB host (e.g., localhost)
    user: 'root',       // Your DB username
    password: 'root', // Your DB password
    database: 'product' // Your database name
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Database.');
});

// API endpoint to fetch products
app.get('/products', (req, res) => {
    const sql = 'SELECT * FROM products';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json({ products: result });
    });
});

// Server listening on port 5173 (or any other port)
const PORT = 5173;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
