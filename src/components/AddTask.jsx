import {useState} from 'react';

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [done, setDone] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please add a task')
            return
        }

        onAdd({ text, day, done })

        setText('')
        setDay('')
        setDone(false)
    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" placeholder="Add Day & Time" value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox" checked={done} value={done} onChange={(e) => setDone(e.currentTarget.checked)} />
            </div>
            <button type="submit" className="btn btn-black">Save Task</button>
        </form>
    );
};

export default AddTask;