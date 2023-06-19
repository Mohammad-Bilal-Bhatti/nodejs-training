const express = require('express');
const utils = require('../helpers/utils');
const jwt = require('../helpers/jwt');
const router = express.Router();

const usersFilePath = 'data/users.json';
const users = utils.readJsonFile(usersFilePath);

router.post('/login', function(req, res, next) {
    const { email, password } = req.body;

    const userIndex = users.findIndex(user => user.email === email);
    if (userIndex === -1) return res.send({ message: 'Invalid user email or password' });

    const user = users[userIndex];
    if (user.password !== password) return res.send({ message: 'Invalid user email or password' });

    const { password: pw, ...usr } = user;

    const token = jwt.generateToken(usr);

    res.send({ message: 'Login success!!!', token: token });
});


module.exports = router;
