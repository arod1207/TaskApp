// dotenv hide keys //
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

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

// Serve Static Assets if in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// connect to server //
app.listen(PORT, console.log(`Server running on http://localhost:${PORT}`));
