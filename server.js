const express = require("express");
const app = express();
const db = require("./config/db");
const productRoutes = require("./routes/productRoutes");
// const hp = require('./frontend')

// const express = require('express');
const bodyParser = require('body-parser');
// const db = require('./config/db'); // Import the MongoDB connection file you created

// const app = express();
app.use(bodyParser.json());

// Import and use the products routes
app.use('/products', productRoutes);

app.use('/',(req,res)=>{
  res.json("This is the Home Page for E-Commerce Inventory CRUD API for ADMIN PANEL AND DASHBOARD!")
})
// Start the server
const port = 3000; // Choose a port number
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
