import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.done ? 'reminder' : ''}`} onDoubleClick={()=>onToggle(task.id)}>
            <h3 key={task.id}>
                {task.text} <FaTimes style={faTimesStyle} onClick={()=>onDelete(task.id)} />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

const faTimesStyle = {
    color: '#BF3945',
    cursor: 'pointer'
}

export default Task
