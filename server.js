const express = require('express');

const app = express();

// Starting the server we use listen
app.listen(3333, () => {
    console.log("server started")
} )