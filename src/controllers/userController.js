const { userService } = require('../services');
const geraToken = require('../utils/geraToken');

const createNewUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const user = await userService.findUser(email);
  if (user) {
    return res.status(409).json({ message: 'User already registered' });
  }
  
  const newUser = await userService.createNewUser(
    displayName,
    email,
    password,
    image,
  );
    
  const { password: senha, ...safeUser } = newUser.dataValues;

  // assim que gero o newUser, o id vem como null e aparece uma chave null contendo o valor do id

  // safeUser.id = newUser.null; // não preciso mais, pois ajustei o model

  const token = geraToken(safeUser);

  return res.status(201).json({ token });
};

const getUsers = async (_req, res) => {
  const users = await userService.getUsers();

  return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getUserById(id);

  if (!user) {
    return res.status(404).json({ message: 'User does not exist' });
  }

  return res.status(200).json(user);
};

module.exports = {
  createNewUser,
  getUsers,
  getUserById,
};
