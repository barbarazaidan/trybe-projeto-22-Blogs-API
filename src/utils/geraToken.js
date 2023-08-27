const JWT = require('jsonwebtoken');

const geraToken = (saveUser) => {
  const configToken = { algorithm: 'HS256', expiresIn: '1d' };
  const segredoToken = process.env.JWT_SECRET;
  const token = JWT.sign(saveUser, segredoToken, configToken);

  return token;
};

module.exports = geraToken;
