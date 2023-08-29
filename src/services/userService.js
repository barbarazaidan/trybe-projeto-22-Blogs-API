const { User } = require('../models');

/*
FINDBYPK => PESQUISA SÓ PELO ID, NÃO FUNCIONA COM EMAIL
nas funções abaixo, não usei o async e await, pois estou retornando-as diretamente e trabalhando a assincronicidade
na chamada do controller
*/

const findUser = (email) =>
  // o findOne retorna o primeiro elemento que satisfaz a condição, tipo o array.find()
  User.findOne({
    where: { email },
  });

const createNewUser = (displayName, email, password, image) =>
  User.create({ displayName, email, password, image });

/*
nos attributes, eu poderia também fazer:
attributes: [array com atributos que eu quero]
do jeito que fiz, estou passando apenas a chave que quero excluir do retorno
*/
  const getUsers = () => User.findAll({
  attributes: { exclude: 'password' },
});

module.exports = {
  findUser,
  createNewUser,
  getUsers,
};
