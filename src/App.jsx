import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'

import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
    const [tasks, setTasks] = useState([])
    const [showAddTask, setShowAddTask] = useState(false)

    useEffect(() => {
        const fetchTasks = async () => {
            const res = await fetch('http://localhost:5000/tasks')
            const data = await res.json()
            setTasks(data)
        }
        fetchTasks()
    }, [])

    const fetchTask = async (taskId) => {
        const res = await fetch(`http://localhost:5000/tasks/${taskId}`)
        const data = await res.json()
        return data
    }

    // Add Task
    const addTask = async (task) => {
        const res = await fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })

        const data = await res.json()
        setTasks([...tasks, data])
    }

    const deleteTask = async (taskId) => {
        await fetch(`http://localhost:5000/tasks/${taskId}`, {
            method: 'DELETE'
        })
        setTasks(tasks.filter(task => task.id !== taskId))
    }

    const toggleReminder = async (taskId) => {
        const taskToToggle = await fetchTask(taskId)
        const updTask = {...taskToToggle, done: !taskToToggle.done}

        const res = await fetch(`http://localhost:5000/tasks/${taskId}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updTask)
        })

        setTasks(tasks.map(task => task.id === taskId ? {...task, done: !task.done} : task))
    }

    return (
        <Router>
            <div className='App'>
                <Header onAdd={()=> setShowAddTask(!showAddTask)} state={showAddTask} />
                { showAddTask && <AddTask onAdd={addTask}/>}
                {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks To Show'}
                <Footer />  
            </div>
        </Router>
    )
}

export default App
