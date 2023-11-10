import { Task } from "../components/Task/Task"
import { useDataFetching } from "../hooks/useDataFetching"
import './Backlog.css'

export const Backlog = () => {

    const [loading, error, tasks] = useDataFetching('https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks')


    return(
        <div className="backlog-wrapper">
            <h2>Backlog</h2>
            <div className="task-wrapper">
                { loading || error ? (
                    <span>{error || "loading"}</span>
                ) : ( 
                    tasks.map((task) => {
                        <Task 
                            key={task.id}
                            title={task.title}
                            body={task.body}
                        />
                    })
                )}
            </div>
        </div>
    )

}