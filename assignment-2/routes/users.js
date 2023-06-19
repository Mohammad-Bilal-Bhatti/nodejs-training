const express = require('express');
const utils = require('../helpers/utils');
const router = express.Router();

const usersFilePath = 'data/users.json';
const users = utils.readJsonFile(usersFilePath);


function* GetIdGenerator() {
  let id = 2;
  while (true) {
    yield id++;
  }
}

const idGenerator = GetIdGenerator();

router.get('/', function(req, res, next) {
  res.send({ users: users });
});

router.post('/', function(req, res, next) {

  const userIndex = users.findIndex(u => u.email == req.body.email);
  if (userIndex > -1) return res.send({ error: 'User already resitered with this email' });

  const ID = idGenerator.next();
  const user = req.body;
  Object.assign(user, { id: ID.value });
  users.push(user);

  utils.writeJsonFile(usersFilePath, users);

  res.send({ user: user });
});

router.patch('/:id', function(req, res, next) {
  const userId = Number(req.params.id);
  const { email, ...patchUser } = req.body;
  const userIndex = users.findIndex(u => u.id == userId);
  if (userIndex === -1) return res.send({ error: 'User not found' });

  const user = users[userIndex];
  Object.assign(user, patchUser);

  utils.writeJsonFile(usersFilePath, users);

  res.send({ user: user });
});

router.delete('/:id', function(req, res, next) {
  const userId = Number(req.params.id);
  const userIndex = users.findIndex(u => u.id == userId);
  if (userIndex === -1) return res.send({ error: 'User not found' });
  const user = users[userIndex];
  users.splice(userIndex, 1);

  utils.writeJsonFile(usersFilePath, users);

  res.send({ user: user });
});

module.exports = router;
