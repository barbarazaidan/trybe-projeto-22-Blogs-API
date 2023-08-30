const { userService } = require('../services');
const geraToken = require('../utils/geraToken');

const doLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await userService.findUser(email); // retorna todas as info do usuário

  // só não entendi por que ele pega direto o user.password, já que a senha está
  // dentro do dataValues do User, que também é um objeto
  if (!user || user.password !== password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  const { password: senha, ...safeUser } = user.dataValues;

  const token = geraToken(safeUser);

  return res.status(200).json({ token });
};

module.exports = {
    doLogin,
};
