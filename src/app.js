const express = require('express');
const routes = require('./routes');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json()); // torna possível ler o body que vem nas requisições

app.use('/login', routes.loginRouter);
app.use('/user', routes.userRouter);
app.use('/categories', routes.categoryRouter);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
