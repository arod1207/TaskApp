const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    newTask: {
        type: String,
        required: true,
    },
    time: {
        type: String,
    },
    date: {
        type: String,
    },
    done: {
        type: Boolean,
    },
});

module.exports = mongoose.model('Task', TaskSchema);
