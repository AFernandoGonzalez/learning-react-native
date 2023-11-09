import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const ProjectDetailsPages = ({ username }) => {

    const [loading, setLoading] = useState(true)
    const [project, setProject] = useState([])

    const { name } = useParams()

    useEffect(() => {
        fetch(`https://api.github.com/repos/${username}/${name}`)
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error('No Data Found')
            })
            .then(data => {
                setProject(data)
                setLoading(false)
            })
            .catch(err => {
                console.error(err);
                setLoading(false)
            })
    }, [username, name])

    return (
        <div>
            <h2>Project: {project.name}</h2>
            {loading ? (
                <span>Loading...</span>
            ) : (
                ""
            )}
        </div>
    )
}