import { useEffect, useState } from "react"
import { Lane } from "../../Lane/Lane"
import './board.css'

const lanes = [
    { id: 1, title: "To Do" },
    { id: 2, title: "In Progress" },
    { id: 3, title: "Review" },
    { id: 4, title: "Done" },
]

export const Board = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "Fix navigation bug",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas dictum libero, vel tristique odio pulvinar vitae.",
            lane: 1
        },
        {
            id: 2,
            title: "Release new website",
            body: "hasellus eleifend lacus vitae est ultrices placerat. Nunc at risus id risus venenatis laoreet sit amet cursus neque.",
            lane: 2
        },
        {
            id: 3,
            title: "Change button color",
            body: "Suspendisse ac lorem a neque tempus luctus non aliquam sapien. Cras ut lacus bibendum, placerat nibh eu, tempus neque.",
            lane: 3
        },
        {
            id: 4,
            title: "Deploy server on acceptance environment",
            body: "Pellentesque pharetra fermentum sapien, aliquet ultrices ligula mattis porttitor.",
            lane: 3
        },
        {
            id: 5,
            title: "Change layout for the content page",
            body: "Cras tellus ligula, mattis at facilisis eu, ultricies vel elit. Ut aliquam volutpat lacus, a rutrum sem vulputate non.",
            lane: 3
        },
        {
            id: 6,
            title: "Complete the registration flow",
            body: "In vel commodo ipsum. Duis id ipsum semper, condimentum ipsum sit amet, maximus massa.",
            lane: 4
        },
        {
            id: 7,
            title: "Create new database instance",
            body: " Curabitur nec sem lorem. Donec venenatis, arcu vitae malesuada consequat, dolor ante placerat mi, in fermentum diam ipsum id libero.",
            lane: 4
        }
    ])

    console.log("tasks: ", tasks);

    // useEffect(() => {
    //     fetch('https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks')
    //         .then(res => {
    //             if (res.ok) {
    //                 return res.json()
    //             }
    //             throw new Error('Data not found')
    //         })
    //         .then(data => {
    //             setTasks(data.results)
    //             setLoading(false)
    //         })
    //         .catch((e) => {
    //             setError(e.message)
    //         })
    // }, [])

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

