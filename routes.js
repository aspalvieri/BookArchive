// Our Express app module
const express = require('express');
const app = express();

// Importing the routes
const booksRoutes = require('./routes/books.js');

// Registering our pageRoutes
app.use('/', booksRoutes);

// Exporting the changes
module.exports = app;