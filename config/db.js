const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://Arpan2001:Arpan2023@e-commerce-api.ix1zu2m.mongodb.net/?retryWrites=true&w=majority';
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
