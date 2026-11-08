const express = require('express');
const pool = require('./database');
const cors = require('cors');

const port = process.env.PORT || 3000;
const app = express();

app.use(cors({ origin: 'http://localhost:8080', credentials: true }));
app.use(express.json());


// ---------------------------------------------------------------------------
// GET all screenings
// ---------------------------------------------------------------------------
app.get('/api/screenings', async (req, res) => {
    try {
        console.log("A get all request has arrived");
        const screenings = await pool.query(
            "SELECT * FROM screenings ORDER BY id"
        );
        res.json(screenings.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Server error" });
    }
});

// ---------------------------------------------------------------------------
// POST - add a new screening
// ---------------------------------------------------------------------------
app.post('/api/screenings', async (req, res) => {
    try {
        console.log("A post request has arrived");
        const s = req.body;
        const created = await pool.query(
            "INSERT INTO screenings (title, genre, price, showtime, showdate) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [s.title, s.genre, s.price, s.showtime, s.showdate]
        );
        res.json(created.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Server error" });
    }
});

// ---------------------------------------------------------------------------
// PUT - update a screening (this version updates ALL fields)
// TODO Task 8: modify this handler (see the exam description)
// ---------------------------------------------------------------------------
app.put('/api/screenings/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const s = req.body;
        console.log("An update request has arrived");
        const updated = await pool.query(
            "UPDATE screenings SET title = $1, genre = $2, price = $3, showtime = $4, showdate = $5 WHERE id = $6 RETURNING *",
            [s.title, s.genre, s.price, s.showtime, s.showdate, id]
        );
        res.json(updated.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Server error" });
    }
});

// ---------------------------------------------------------------------------
// DELETE - delete one screening by id
// ---------------------------------------------------------------------------
app.delete('/api/screenings/:id', async (req, res) => {
    try {
        const { id } = req.params;
        console.log("A delete request has arrived");
        const deleted = await pool.query(
            "DELETE FROM screenings WHERE id = $1 RETURNING *", [id]
        );
        res.json(deleted.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Server error" });
    }
});


// TODO Task 9: GET /api/screenings/genre/:genre


// TODO Task 10: DELETE /api/screenings/date/:date


// TODO Task 11: GET /api/screenings/stats


app.listen(port, () => {
    console.log("Server is listening to port " + port);
});
