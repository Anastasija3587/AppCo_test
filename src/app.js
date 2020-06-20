const express = require('express');
const corsMiddleware = require('cors');
const path = require('path');
const db = require('./models/index');
const usersRouters = require('./app/user');

const app = express();
const port = process.env.PORT || 3001;

function start() {
  app.use(express.json());
  app.use(corsMiddleware());

  app.use(express.static('build'));

  // Add all routers
  app.use('/api/users', usersRouters);

  // If route doesn't find
  app.use('/api/*', (req, res) => {
    res.status(404).json('Error 404!');
  });

  // Handles any requests that don't match the ones above
  app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/../build/index.html`));
  });

  db.sequelize.sync().then(() => {
    console.log('SQLite is connection');
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  });
}

module.exports = start;
