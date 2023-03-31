import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'
function App() {
    const [tasks, setTasks] = useState([
        { id: 1, name: 'Task 1', done: false, day: 'Feb 5th at 2:30pm' },
        { id: 2, name: 'Task 2', done: false, day: 'Feb 5th at 2:30pm' },
        { id: 3, name: 'Task 3', done: false, day: 'Feb 5th at 2:30pm' },
        { id: 4, name: 'Task 4', done: false, day: 'Feb 5th at 2:30pm' },
        { id: 5, name: 'Task 5', done: false, day: 'Feb 5th at 2:30pm' },
        { id: 6, name: 'Task 6', done: false, day: 'Feb 5th at 2:30pm' },
        { id: 7, name: 'Task 7', done: false, day: 'Feb 5th at 2:30pm' },
        { id: 8, name: 'Task 8', done: false, day: 'Feb 5th at 2:30pm' },
        { id: 9, name: 'Task 9', done: false, day: 'Feb 5th at 2:30pm' },
        { id: 10, name: 'Task 10', done: false, day: 'Feb 5th at 2:30pm' }
    ])

    const deleteTask = ({ taskId }) => {}

    return (
        <div className='App'>
            <Header />
            <Tasks tasks={tasks} onDelete={deleteTask} />
        </div>
    )
}

export default App
