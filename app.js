

// import moment from 'moment';
// moment().format();


// const moment = require('moment');
// moment().format();
// const db = require('./db/index.js');
import db from './db/index.js';

const {Movie, Person} = db.models;
const { Op } = db.Sequelize;
// const {Person} = db.Person


// (!!!)
// Async IIFE (Immediately Invoked Function Expression)
( async ()=>{
    // Sync *ALL* models at once
    await db.sequelize.sync({force: true});
    // const date = moment("12-25-1995", "MM-DD-YYYY").toDate();
    // const date = new Date('05 October 2011 14:48 UTC').toISOString();
    // const date = "2024-03-03";

  try{
    // Create
    // ---------------------------------------------------------------------------------------------
    // (3) Multipe entries in 1 Promise
    const movieInstances = await Promise.all([
      // Model.create()
      Movie.create({
        title: 'Title 1',
        runtime: 10,
        releaseDate: "2024-01-01",
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
        runtime: 20,
        releaseDate: "2024-02-02",
        // releaseDate: moment(new Date('2024-01-01')).format('YYYY-MM-DD'),
        // releaseDate: new Date("2013-06-01T16:29:55.245Z"),
        // releaseDate: moment("12-25-1995", "MM-DD-YYYY"),
        // releaseDate: moment(new Date("2024-01-01")).format("YYYY-MM-DD"),
        // releaseDate: moment("12-25-1995", "MM-DD-YYYY").toISOString(),
        // releaseDate: moment("2013-06-13T16:29:55.245Z").toDate(),
        // releaseDate: new Date("2013-06-01T16:29:55.245Z"),
        isAvailableOnVHS: true,
      }),
      // Model.build().save()
      Movie.build({
        title: 'Title 3',
        runtime: 30,
        releaseDate: "2024-03-03",
        isAvailableOnVHS: true,
      }).save(),
      Movie.create({
        title: 'Title 4',
        runtime: 40,
        releaseDate: "2024-04-04",
        isAvailableOnVHS: true,
      }),
      Movie.create({
        title: 'Title 5',
        runtime: 50,
        releaseDate: "2024-05-05",
        isAvailableOnVHS: true,
      }),
      Movie.create({
        title: 'Title 6',
        runtime: 60,
        releaseDate: "2024-06-06",
        isAvailableOnVHS: true,
      }),
      Movie.create({
        title: 'Title 7',
        runtime: 70,
        releaseDate: "2024-07-07",
        isAvailableOnVHS: true,
      }),
      Movie.create({
        title: 'Title 8',
        runtime: 80,
        releaseDate: "2024-08-08",
        isAvailableOnVHS: true,
      }),
      Movie.create({
        title: 'Title 9',
        runtime: 90,
        releaseDate: "2024-09-09",
        isAvailableOnVHS: true,
      }),
      Movie.create({
        title: 'Title 10',
        runtime: 100,
        releaseDate: "2024-10-10",
        isAvailableOnVHS: true,
      }),
      Movie.create({
        title: 'Title 11',
        runtime: 110,
        releaseDate: "2024-11-11",
        isAvailableOnVHS: true,
      }),
      Movie.create({
        title: 'Title 12',
        runtime: 120,
        releaseDate: "2024-12-12",
        isAvailableOnVHS: true,
      }),
      Movie.create({
        title: 'Title 13',
        runtime: 130,
        releaseDate: "2024-12-13",
        isAvailableOnVHS: true,
      }),
    ]);

    const personInstances = await Promise.all([
      Person.create({
        firstName: 'Nombre',
        lastName: 'Apellido',
      }),
    ]);

    // Update Instances
    const movie8 = await Movie.findByPk(8, {
      attributes: ['id', 'title', 'isAvailableOnVHS'],
    });
    movie8.isAvailableOnVHS = false;
    await movie8.save();

    const movie9 = await Movie.findByPk(9, {
      attributes: ['id', 'title', 'isAvailableOnVHS'],
    });
    await movie9.update({
      title: 'Wrong Title',
      isAvailableOnVHS: false,
    }, {fields: ['isAvailableOnVHS']});

    // Destroy Instances: Hard Destruction
    const destroyData = await Movie.findAll({
      where: {
        title: {[Op.startsWith]: "Title"},
        runtime: {[Op.between]: [100, 110]},
      },
      order: [['id', 'DESC']], // vs ASC
    });

    destroyData.forEach( entry => entry.destroy() );

    // console.log("Updated:", movie8.get({plain: true}) );
    // console.log("Updated:", movie9.get({plain: true}) );

    // Primary Key
    // const movie = await Movie.findByPk(1);
    
    // Find One Where
    // const movie = await Movie.findOne({ 
    //   where: {
    //     releaseDate: "2024-02-02",
    //   }
    // });

    // Find All
    // const movie = await Movie.findAll();

    // Find Some
    // const movie = await Movie.findAll({ 
    //   where: {
    //     runtime: 90,
    //   }
    // });

    // Find Some.  Return only some attr
    // const movieData = await Movie.findAll({
    //   attributes: ['id', 'title'],
    //   where: {
    //     runtime: 90,
    //   },
    // });

    // Find Some Using Operators
    // const movieData = await Movie.findAll({
    //   attributes: ['id', 'title'],
    //   where: {
    //     releaseDate: {[Op.gte]: "2024-01-01"},
    //     runtime: {[Op.gt]: 80},
    //   },
    // });

    // Ordering
    // const movieData = await Movie.findAll({
    //   attributes: ['id', 'title', 'isAvailableOnVHS'],
    //   where: {
    //     title: {[Op.startsWith]: "Title"},
    //     releaseDate: {[Op.between]: ["2024-05-05", "2024-09-09"]},
    //     runtime: {[Op.gt]: 50},
    //   },
    //   order: [['id', 'ASC']], // vs ASC
    // });

    // Complete
    const movieData = await Movie.findAll({
      attributes: ['id', 'title', 'isAvailableOnVHS'],
      where: {
        title: {[Op.startsWith]: "Title"},
      },
      order: [['id', 'DESC']], // vs ASC
    });

    console.log(
      movieData.map( movie=>movie.toJSON() )
    );

    // console.log( "Created: ", movieInstances[2].toJSON() );
    // console.log("\n");
    // console.log("Movies");
    // console.log("--------------------------------------------------");
    // const moviesJSON = movieInstances.map( movie=>movie.toJSON() );
    // console.log(moviesJSON);
    // console.log("\n");
    // console.log("People")
    // const personsJSON = personInstances.map( person=>person.toJSON() );
    // console.log("--------------------------------------------------");
    // console.log(personsJSON);
    // console.log("\n");
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