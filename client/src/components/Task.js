import axios from 'axios';
import moment from 'moment';
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
                        className={`tasks ${task.done ? 'task__complete' : ''}`}
                        key={task.id}
                        onDoubleClick={() => toggleHandler(task.id)}
                    >
                        <div className="task__test">
                            <h3>{task.newTask}</h3>
                            <p>
                                {task.time === ''
                                    ? ''
                                    : moment(task.time, 'HH:mm').format(
                                          'h:mm A'
                                      )}
                            </p>
                            <p>{moment(task.date).format('MMMM Do YYYY')}</p>
                        </div>
                        <div className="task__delete">
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
