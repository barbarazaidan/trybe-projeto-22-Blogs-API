const { userService } = require('../services');
const geraToken = require('../utils/geraToken');

const doLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await userService.getUser(email); // retorna todas as info do usuário

  // só não entendi por que ele pega direto o user.password, já que a senha está
  // dentro do dataValues do User, que também é um objeto
  if (!user || user.password !== password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  const { password: senha, ...safeUser } = user.dataValues;

  const token = geraToken(safeUser);

  return res.status(200).json({ token });
};

const createNewUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const user = await userService.getUser(email);
  console.log(user, 'user')
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

  safeUser.id = newUser.null;

  const token = geraToken(safeUser);

  return res.status(201).json({ token });
};

module.exports = {
  doLogin,
  createNewUser,
};
