import express from 'express';
import mysql from 'mysql';
import dotenv from 'dotenv';
dotenv.config();
let server = express();
server.use(express.json());

let users = [
    {
        id: 1,
        name: 'Demeter Bálint',
        email: 'demeterbalint@gmail.com',
    },
    {
        id: 2,
        name: 'Flórián Ábel',
        email: 'florianabel@gmail.com',
    },
    {
        id: 3,
        name: 'Kolompos Brendon',
        email: 'kolomposbrendon@gmail.com',
    },
];

const con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DATABASE,
    port: process.env.PORT
});

server.get('/api/users', (req, res) => {
    res.status(200).json(users);
});

server.get('/api/users/:id', (req, res) => {
    const id = req.params.id;

    users.forEach((user) => {
        if (user.id === parseInt(id)) {
            return res.status(200).json(user);
        }
    });

    return res.status(400).send('User does not exist.');
});

server.post('/api/users', (req, res) => {
    const { name, email } = req.body;

    con.connect(function(err) {
        if (err) return res.status(500).send(err);
        
        let sql = 'INSERT INTO '
    })
});

const PORT = 8080;

server.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}/`);
});
