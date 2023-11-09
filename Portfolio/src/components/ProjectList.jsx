import { Link } from "./Link"

import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { useParams } from "react-router-dom"

export const ProjectList = ({ items }) => {
    const navigate = useNavigate();


    const handleRedirect = (url) => {
        navigate(url);
    };

    return (
        <div>
            {items.map((item) => {
                return (
                    <ul key={item.id}>
                        <li>
                            <span>Name: </span>
                            {item.name}
                        </li>
                        <li>
                            <span>Created At: </span>
                            {item.created_at}
                        </li>
                        <button onClick={() => handleRedirect(`/projects/${item.name}`)}
                            title={item.name}>
                            Go to project
                        </button>

                    </ul>
                )
            })}
        </div>
    )
}