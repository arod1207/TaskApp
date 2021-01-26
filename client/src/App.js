import AddTask from './components/AddTask';
import Header from './components/Header';
import News from './components/News';

import { TaskProvider } from './TaskContext';

const App = () => {
    return (
        <TaskProvider>
            <div className="wholesite">
                <News className="news__container" />
                <div className="container">
                    <Header />
                    <AddTask />
                </div>
            </div>
        </TaskProvider>
    );
};

export default App;
