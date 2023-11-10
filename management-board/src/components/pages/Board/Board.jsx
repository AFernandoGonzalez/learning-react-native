import { useEffect, useState } from "react"
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
    const [loading, error, data ] = useDataFetching(TASK_API_ENDPOINT)

    const [tasks, setTasks] = useState([]);
    
    useEffect(()=> {
        setTasks(data)
    }, [data])

    const onDragStart = (e, id) => {
        e.dataTransfer.setData('id', id)
    }
    const onDragOver = (e) => {
        e.preventDefault()
    }

    const onDrop = (e, laneId) => {
        const id = e.dataTransfer.getData('id')

        const updateTasks = tasks.filter((task) => {
            if(task.id.toString() == id){
                task.lane == laneId
            }
            return task
        })

        setTasks(updateTasks)
    }

    return (
        <div className="board-wrapper">
            {lanes.map((lane) => {
                return (
                    <Lane
                        key={lane.id}
                        laneId={lane.id}
                        title={lane.title}
                        loading={loading}
                        error={error}
                        tasks={tasks.filter((task) => task.lane === task.id)}
                        onDragStart={onDragStart}
                        onDragOver={onDragOver }
                        onDrop={onDrop}
                    />
                )
            })}
        </div>
    )
}

