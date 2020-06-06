const express = require('express');
const corsMiddleware = require('cors');
const {Sequelize, DataTypes} = require('sequelize');
const User = require('../models/user');
const Statistics = require('../models/statistics');

const app = express();
const port = 3001;

async function start() {
  try {
    const connection = await new Sequelize('database', 'root', null, {
      host: 'localhost',
      dialect: 'sqlite',
      storage: 'database.sqlite',
    });

    await User(connection, DataTypes).sync();
    await Statistics(connection, DataTypes).sync();

    app.use(express.json());
    app.use(corsMiddleware());

    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = start;
