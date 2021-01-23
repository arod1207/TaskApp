import axios from 'axios';
import { useEffect, useState, createContext } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const getTask = async () => {
            const res = await axios.get('tasks/');
            setTasks(res.data);
        };
        getTask();
    }, [setTasks]);

    return (
        <TaskContext.Provider value={[tasks, setTasks]}>
            {children}
        </TaskContext.Provider>
    );
};
