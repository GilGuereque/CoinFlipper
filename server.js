// Import the Express framework and create an instance of the app
const express = require('express');
const app = express();

// Serve static files form the "public" directory
app.use(express.static('public'));

// Serve the index.html file as the root url
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

// Start the server on port 8000
app.listen(8000, function() {
    console.log('listening on 8000');
});