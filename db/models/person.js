

// Create an database-instance connected to a SQLite DB
// const Sequelize = require('sequelize'); // "require" the sequelize-module
import Sequelize from 'sequelize';

// Movie Model (Class, Table)
// module.exports = sequelize => {
function personModel(sequelize) {
  class Person extends Sequelize.Model {}; // Create Person subclass

  // Initialize Model
  Person.init({
    // Modified `id`-attr.  A default is provided if none specified.
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: Sequelize.STRING(50), // Default is 255
      allowNull: false,
      defaultValue: false,
      validate: {
        notNull: {
          msg: 'Please provide a value for first name.',
        },
        // notEmpty: true, // default error msg
        notEmpty: {
          msg: 'Please provide a value for first name.',
        },
      },
    },
    lastName: {
	type: Sequelize.STRING(50), // Default is 255
	allowNull: false,
	defaultValue: false,
	validate: {
	  notNull: {
	    msg: 'Please provide a value for first name.',
	  },
	  // notEmpty: true, // default error msg
	  notEmpty: {
	    msg: 'Please provide a value for first name.',
	  },
	},
   },
  }, 
  {sequelize});

  return Person;
}

export default personModel;