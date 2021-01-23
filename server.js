// dotenv hide keys //
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

// initialize expresss //
const app = express();

// declare port to run server on //
const PORT = process.env.PORT || 5000;

//connect to mongodb //

mongoose
    .connect(process.env.MONGODB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.log(error);
    });

app.listen(PORT, console.log(`Server running on http://localhost:${PORT}`));
