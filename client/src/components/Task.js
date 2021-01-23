import axios from 'axios';
import { useContext } from 'react';
import { TaskContext } from '../TaskContext';

const Task = () => {
    const [tasks, setTasks] = useContext(TaskContext);

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:5000/tasks/${id}`);
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const toggleHandler = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, done: !task.done } : task
            )
        );
    };

    return (
        <div className="task">
            {tasks.length === 0 ? (
                <h1>No Task Today</h1>
            ) : (
                tasks.map((task) => (
                    <div
                        key={task.id}
                        className={`tasks ${task.done ? 'task__complete' : ''}`}
                        onDoubleClick={() => toggleHandler(task.id)}
                    >
                        <h3>{task.newTask}</h3>
                        <br></br>
                        <p>{task.date}</p>
                        <div className="task__Delete">
                            <i
                                className="fas fa-trash-alt fa-lg"
                                onClick={() => deleteHandler(task.id)}
                            ></i>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Task;
