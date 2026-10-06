import express from 'express';
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

    try {
        users.push({
            id: users.length + 1,
            name: name,
            email: email,
        });
        
        return res.status(201).send('Sikeresen létrehozva');
    } catch (err) {
        return res.status(500).send(err);
    }
});

const PORT = 8080;

server.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}/`);
});
