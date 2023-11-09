import './Task.css'

export const Task = ({ title, body }) => {
    return (
        <div className="task-wrapper">
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    )
}
