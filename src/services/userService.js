const { User } = require('../models');

const getUser = (email) =>
  // o findOne retorna o primeiro elemento que satisfaz a condição, tipo o array.find()
  User.findOne({
    where: { email },
  });

module.exports = {
  getUser,
};
