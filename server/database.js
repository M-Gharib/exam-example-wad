const Pool = require('pg').Pool;
const pool = new Pool({
    user: "", // Enter your username here
    password: "", // Enter your password here
    database: "", // Enter your database name here
    host: "localhost",
    port: "5432"
});

const execute = async (createTblQuery, insertDataQuery) => {
    try {
        await pool.query(createTblQuery);
        await pool.query(insertDataQuery);
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

const createTblQuery = `
    CREATE TABLE IF NOT EXISTS "screenings" (
        "id" SERIAL PRIMARY KEY,
        "title" VARCHAR(200) NOT NULL,
        "genre" VARCHAR(100) NOT NULL,
        "price" integer NOT NULL,
        "showtime" VARCHAR(200) NOT NULL,
        "showdate" VARCHAR(200) NOT NULL
    );`;

const insertDataQuery = `WITH data (title, genre, price, showtime, showdate) AS
    (
    VALUES
    ('Inception',     'Sci-Fi',    12, '14:00:00', '2026-12-15'),
    ('Spirited Away', 'Animation',  7, '15:30:00', '2026-12-15'),
    ('The Godfather', 'Crime',     10, '17:00:00', '2026-12-15'),
    ('Interstellar',  'Sci-Fi',    14, '18:30:00', '2026-12-15'),
    ('Toy Story',     'Animation',  6, '12:00:00', '2026-12-16'),
    ('Parasite',      'Thriller',  11, '16:00:00', '2026-12-16'),
    ('Gladiator',     'Action',    13, '20:00:00', '2026-12-16'),
    ('Amelie',        'Romance',    8, '19:00:00', '2026-12-16')
    )
    INSERT INTO screenings(title, genre, price, showtime, showdate)
    SELECT d.title, d.genre, d.price, d.showtime, d.showdate
    FROM data d
    WHERE NOT EXISTS (SELECT * FROM screenings WHERE id = 1);
`;

execute(createTblQuery, insertDataQuery).then(result => {
    if (result) {
        console.log('If it does not exist, table "screenings" is created and filled');
    }
});

module.exports = pool;
