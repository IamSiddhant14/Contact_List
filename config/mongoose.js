//require the library
const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost/contact_list_master_db');

// db is the connection present bewteen the mongoose and database
const db = mongoose.connection;

//error,since javascript is an event driven language and here error significe to a keuy word
db.on('error', function(err) {

    console.log(err.message);

     });

//up and running then print the message
db.once('open', function() {
  
    console.log("Successfully connected to the database(from config folder)");

});


