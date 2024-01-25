

// const Sequelize = require('sequelize');
import Sequelize from 'sequelize';
import movieModel from './models/movie.js';
import personModel from './models/person.js';

// Configure Sequelize Instance
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'movies.db',
  logging: false, // false disables logging (true by default)
  
  // Global Options for All Models
  define: {
    // freezeTableName: true,
    timestamps: true,
  },
});

const db = {
  sequelize,
  Sequelize,
  models: {},
};

// db.models.Movie = require('./models/movie.js') (sequelize);
db.models.Movie = movieModel(sequelize);
db.models.Person = personModel(sequelize);

// module.exports = db;
export default db;