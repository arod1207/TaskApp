const Task = require('../Models/Task');
const Router = require('express').Router();

// post to database //
Router.post('/tasks', (req, res) => {
    const newTask = new Task({
        newTask: req.body.newTask,
        time: req.body.time,
        date: req.body.date,
        done: req.body.done,
    });
    newTask
        .save()
        .then((results) => {
            res.status(200).json(results);
        })
        .catch((error) => {
            res.status(500).json(error);
        });
});

// get the tasks from database
Router.get('/tasks', (req, res) => {
    Task.find()
        .then((results) => {
            res.status(200).json(results);
        })
        .catch((error) => {
            res.status(500).json(error);
        });
});

Router.delete('/tasks/:id', (req, res) => {
    const id = req.params.id;
    Task.findByIdAndDelete(id)
        .then((results) => {
            res.status(200).json(results);
        })
        .catch((error) => {
            res.status(500).json(error);
        });
});

module.exports = Router;
