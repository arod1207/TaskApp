import axios from 'axios';
import moment from 'moment';
import { useContext } from 'react';
import { TaskContext } from '../TaskContext';

const Task = () => {
    const [tasks, setTasks] = useContext(TaskContext);
    console.log(tasks);

    const deleteHandler = (id) => {
        axios.delete(`/tasks/${id}`);
        setTasks(tasks.filter((task) => task._id !== id));
    };

    const toggleHandler = (id) => {
        setTasks(
            tasks.map((task) =>
                task._id === id ? { ...task, done: !task.done } : task
            )
        );
    };

    return (
        <div className="task">
            {tasks && tasks.length === 0 ? (
                <h1>No Task Today</h1>
            ) : (
                tasks.map((task) => (
                    <div
                        className={`tasks ${task.done ? 'task__complete' : ''}`}
                        key={task._id}
                        onDoubleClick={() => toggleHandler(task._id)}
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
                            <p>
                                {task.date === ''
                                    ? ''
                                    : moment(task.date).format('MMMM DD YYYY')}
                            </p>
                        </div>
                        <div className="task__delete">
                            <i
                                className="fas fa-trash-alt fa-lg"
                                onClick={() => deleteHandler(task._id)}
                            ></i>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Task;
