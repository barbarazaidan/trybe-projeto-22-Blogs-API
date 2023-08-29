const { User } = require('../models');

/*
FINDBYPK => PESQUISA SÓ PELO ID, NÃO FUNCIONA COM EMAIL
nas funções abaixo, não usei o async e await, pois estou retornando-as diretamente e trabalhando a assincronicidade
na chamada do controller
*/

const getUser = (email) =>
  // o findOne retorna o primeiro elemento que satisfaz a condição, tipo o array.find()
  User.findOne({
    where: { email },
  });

const createNewUser = async (displayName, email, password, image) =>
  User.create({ displayName, email, password, image });

module.exports = {
  getUser,
  createNewUser,
};
