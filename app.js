

import moment from 'moment';
// moment().format();


// const moment = require('moment');
// moment().format();
// const db = require('./db/index.js');
import db from './db/index.js';

const {Movie, Person} = db.models;
// const {Person} = db.Person


// (!!!)
// Async IIFE (Immediately Invoked Function Expression)
( async ()=>{
    // Sync *ALL* models at once
    await db.sequelize.sync({force: true});
    // const date = moment("12-25-1995", "MM-DD-YYYY").toDate();
    // const date = new Date('05 October 2011 14:48 UTC').toISOString();
    const date = "2024-02-02";

  try{
    // Create
    // ---------------------------------------------------------------------------------------------
    // (3) Multipe entries in 1 Promise
    const movieInstances = await Promise.all([
      Movie.create({
        title: 'Title 1',
        runtime: 90,
        releaseDate: date,
        // releaseDate: moment(new Date('2024-01-01')).format('YYYY-MM-DD'),
        // releaseDate: new Date("2013-06-01T16:29:55.245Z"),
        // releaseDate: moment("12-25-1995", "MM-DD-YYYY"),
        // releaseDate: moment(new Date("2024-01-01")).format("YYYY-MM-DD"),
        // releaseDate: moment("12-25-1995", "MM-DD-YYYY").toISOString(),
        // releaseDate: new Date("2013-06-01T16:29:55.245Z"),
        // releaseDate: '2024-01-01',
        // releaseDate: moment("2013-06-13T16:29:55.245Z").toDate(),
        // releaseDate: moment("2013-06-13T16:29:55.245Z").toISOString(),
        isAvailableOnVHS: true,
      }),
      Movie.create({
        title: 'Title 2',
        runtime: 90,
        releaseDate: date,
        // releaseDate: moment(new Date('2024-01-01')).format('YYYY-MM-DD'),
        // releaseDate: new Date("2013-06-01T16:29:55.245Z"),
        // releaseDate: moment("12-25-1995", "MM-DD-YYYY"),
        // releaseDate: moment(new Date("2024-01-01")).format("YYYY-MM-DD"),
        // releaseDate: moment("12-25-1995", "MM-DD-YYYY").toISOString(),
        // releaseDate: moment("2013-06-13T16:29:55.245Z").toDate(),
        // releaseDate: new Date("2013-06-01T16:29:55.245Z"),
        isAvailableOnVHS: true,
      }),
    ]);

    const personInstances = await Promise.all([
      Person.create({
        firstName: 'Nombre',
        lastName: 'Apellido',
      }),
    ]);
    console.log("Movies");
    const moviesJSON = movieInstances.map( movie=>movie.toJSON() );
    console.log(moviesJSON);
    console.log("People")
    const personsJSON = personInstances.map( person=>person.toJSON() );
    console.log(personsJSON);
    // (2) Create: multiple entries
    // await Movie.create({title: 'Wally'});
    // await Movie.create({title: 'Robin Hood'});
    // (1) Create: an entry, and log to console:
    // const movie = await Movie.create({
    //   title: 'Wally',
    // });
    // console.log(movie.toJSON());

    // (0)


    // test cnx:
    // ---------------------------------------------------------------------------------------------
    // await sequelize.authenticate();
    // console.log('App connected to database.');


  }
  catch(error) {
    // console.log('Error connecting to database:', error);
    if(error.name === 'SequelizeValidationError') {
      const errors = error.errors.map(err => err.message );
      console.error('Validation errors: ', errors);
    }
    else throw error;
  }
}) ();