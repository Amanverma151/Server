const mongoose = require("mongoose")
//  const uri = "mongodb://localhost:27017/BookList";


const uri = "mongodb://0.0.0.0:27017/bookrecords";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'connection error:'));


connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

module.exports = connection;