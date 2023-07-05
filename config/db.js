const mongoose = require('mongoose');

// const dbURI = 'mongodb+srv://Arpan2001:Arpan2023@cluster0.hciafyn.mongodb.net/?retryWrites=true&w=majority/ecom';
// const dbURI = 'mongodb://atlas-sql-64a4c72a850c220cc358ab52-uhbfl.a.query.mongodb.net/test?ssl=true&authSource=admin/ecom';
const dbURI = 'mongodb+srv://Arpan2001:Arpan2023@cluster0.hciafyn.mongodb.net/ecom';


 // Replace 'your-database-name' with your actual database name

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB!');
});
