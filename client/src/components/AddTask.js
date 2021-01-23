import axios from 'axios';
import { useContext, useState } from 'react';
import Task from './Task';

import { TaskContext } from '../TaskContext';

const AddTask = () => {
    const [newTask, setNewTask] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [tasks, setTasks] = useContext(TaskContext);

    console.log(time);

    console.log(date);

    const addHandler = async (e) => {
        e.preventDefault();
        if (newTask === '') {
            alert('Enter a Task');
        } else {
            const res = await axios.post('http://localhost:5000/tasks/', {
                newTask,
                date,
                time,
                done: false,
            });
            const data = res.data;
            setTasks([...tasks, data]);
            setNewTask('');
            setTime('');
            setDate('');
        }
    };

    return (
        <form>
            <div className="addTask">
                <input
                    type="text"
                    placeholder="Add Task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <button onClick={addHandler}>Add Task</button>
                <Task />
            </div>
        </form>
    );
};

export default AddTask;
