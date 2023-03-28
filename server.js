const express = require('express');
const app = express();

//middleware routes:
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})


//connect to server port 8000
app.listen(8000, function() {
    console.log('listening on 8000');
});