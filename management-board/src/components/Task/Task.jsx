import './Task.css'

export const Task = ({ title, body, onDragStart, id }) => {
    return (
        <div 
        draggable
        onDragStart={(e) => onDragStart(e, id)}
        className="task-wrapper">
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    )
}
