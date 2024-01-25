

// Create an database-instance connected to a SQLite DB
// const Sequelize = require('sequelize'); // "require" the sequelize-module
import Sequelize from 'sequelize';

// Movie Model (Class, Table)
// module.exports = sequelize => {
function movieModel(sequelize) {
  class Movie extends Sequelize.Model {}; // Create Movie subclass

  // Initialize Model
  Movie.init({
    // Modified `id`-attr.  A default is provided if none specified.
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.STRING(256), // Default is 255
      allowNull: false,
      defaultValue: false,
      validate: {
        notNull: {
          msg: 'Please provide a value for "title".',
        },
        // notEmpty: true, // default error msg
        notEmpty: {
          msg: 'Please provide a value for "title".',
        },
      },
    },
    runtime: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: false,
      validate: {
        notNull: {
          msg: 'Please provide a value for "runtime".',
        },
        min: {
          args: 1,
          msg: 'Please provide a value greater than "0" for "runtime".',
        },
      },
    },
    releaseDate: {
      type: Sequelize.DATEONLY,
      // type: Sequelize.DATEONLY, // "yyyy-mm-dd" vs DATE "yyyy-mm-dd hh:mm:ss"
      // type: Sequelize.STRING(11), // "yyyy-mm-dd" vs DATE "yyyy-mm-dd hh:mm:ss"
      allowNull: false,
      defaultValue: false,
      validate: {
        notNull: {
          msg: 'Please provide a value for "releaseDate".',
        },
        isAfter: {
          args: '1895-12-27',
          msg: 'Please provide a value on or after "1895-12-28" for "releaseDate".',
        },
      },
    },
    isAvailableOnVHS: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  }, 
  {
    // Set options for this model only
    // modelName: 'movieModelName',
    // tableName: 'movieTableName'
    // timestamps: false,
    // freezeTableName: true,
    paranoid: true, // enable "soft" delete
    sequelize, // destructured {sequelize: sequelize}
  });

  return Movie;
}

export default movieModel;