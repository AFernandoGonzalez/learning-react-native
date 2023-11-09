import { useEffect, useState } from "react"
import { ProjectList } from "./ProjectList"

export const Project = ({ username }) => {
    const [loading, setLoading] = useState(true)
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}/repos`)
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
            })
            .then(data => {
                setProjects(data)
                setLoading(false)
            })
            .catch(err => {
                console.error(err);
                setLoading(false)
            })
    }, [username])

    return (
        <div>
            {loading ? (
                "Loading..."
            ) : (
                <ProjectList items={projects} />
            )}
        </div>
    )
}