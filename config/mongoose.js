const mongoose = require('mongoose');





mongoose.connect('mongodb+srv://sanky91221:sa83ri73ta94@cluster0.8ejgmul.mongodb.net/csvupload?retryWrites=true&w=majority');

const db = mongoose.connection;

db.once('open', function(){
    console.log('database connected to the server successfully!');
});

module.exports = db;
