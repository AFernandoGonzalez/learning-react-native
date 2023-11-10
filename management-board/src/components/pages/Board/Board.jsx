import { useDataFetching } from "../../../hooks/useDataFetching"
import { Lane } from "../../Lane/Lane"
import './board.css'

const lanes = [
    { id: 1, title: "To Do" },
    { id: 2, title: "In Progress" },
    { id: 3, title: "Review" },
    { id: 4, title: "Done" },
]

const TASK_API_ENDPOINT = "https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks"

export const Board = () => {
    const [loading, error, tasks ] = useDataFetching(TASK_API_ENDPOINT)

    return (
        <div className="board-wrapper">
            {lanes.map((lane) => {
                return (
                    <Lane
                        key={lane.id}
                        title={lane.title}
                        loading={loading}
                        error={error}
                        tasks={tasks.filter((task) => task.lane === task.id)}
                    />
                )
            })}
        </div>
    )
}

