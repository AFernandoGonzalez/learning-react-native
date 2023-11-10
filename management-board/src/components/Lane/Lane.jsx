import { Task } from "../Task/Task"
import './Lane.css'

export const Lane = ({ title, loading, error, tasks, onDragStart, onDragOver , laneId, onDrop}) => {

    return (
        <div
            onDragOver={onDragOver}
            onDrop={onDrop}
            className="lane-wrapper">

            <h1 className="">{title}</h1>
            {loading || error ? (
                <span>{error || 'Loading...'}</span>
            ) : (
                tasks.map((task) => (
                    <Task
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        body={task.body}
                        onDragStart={onDragStart}
                        onDrop={(e) => onDrop(e, laneId)}
                    />
                ))
            )}
        </div>
    )
}
