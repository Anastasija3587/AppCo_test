const express = require('express');
const corsMiddleware = require('cors');
const db = require('./models/index');
const usersRouters = require('./app/user/controller');

const app = express();
const port = process.env.PORT || 3001;

function start() {
  app.use(express.json());
  app.use(corsMiddleware());

  // Add all routers
  app.use('/api/users', usersRouters.getAll);

  // If route doesn't find
  app.use('*', (req, res) => {
    res.status(404).json('Error 404!');
  });

  db.sequelize.sync().then(() => {
    console.log('SQLite is connection');
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  });
}

module.exports = start;
