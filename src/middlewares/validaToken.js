const JWT = require('jsonwebtoken');

const extractToken = (token) => {
  const usableToken = token.split(' ')[1]; // aqui o split transforma em um array com dois elementos, sendo Bearer na posição 0 e o token na posição 1
  return usableToken;
};

const validaToken = (req, res, next) => {
  /*
    eu preciso envelopar tudo dentro do try catch, pois se a validação do verify mostrar que o token é inválido ou expirou, o JWT vai disparar um erro, fazendo a API quebrar
    */
  try {
    const { authorization: token } = req.headers;
    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const usableToken = extractToken(token);

    const secret = process.env.JWT_SECRET;

    const decodedToken = JWT.verify(usableToken, secret);
    // coloquei as informações do usuário dentro de uma nova chave criada no req e que chamei de payload
    req.payload = decodedToken;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validaToken;
