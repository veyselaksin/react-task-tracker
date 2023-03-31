import { FaTimes } from 'react-icons/fa'

const Task = ({ task }) => {
    return (
        <div className='task'>
            <h3 key={task.id}>
                {task.name} <FaTimes style={faTimesStyle} />
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
