// dotenv hide keys //
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

// route files //
const newTask = require('./Routes/TaskAPI');

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

// parse the json //
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API Routes //
app.use('/', newTask);

// connect to server //
app.listen(PORT, console.log(`Server running on http://localhost:${PORT}`));
