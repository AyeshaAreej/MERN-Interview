const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/mernApp_db')

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open ',()=>{
    console.log('MongoDB connection error:')
    });

    