'use strict'

const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

// Identifies the folders where the static files can be found
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'assets')));

// Sets up the route to the main page
app.get('/', (req, res) => {
  response.sendFile(path.join(__dirname, 'public, index.html'));
});

// Activates listening on Port 3000 locally
app.listen(port, function(){
  console.log("Server active on port:", port);
});
