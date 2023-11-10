import { Task } from "../Task/Task"
import './Lane.css'

export const Lane = ({ title, loading, error, tasks }) => {

    return (
        <div className="lane-wrapper">
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
                   
                    />
                ))
            )}
        </div>
    )
}
