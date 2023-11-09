import { Link } from "./Link"

import { Link as RouterLink } from 'react-router-dom'

export const ProjectList = ({ items }) => {

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
                        <Link
                            url={item.url}
                            title={item.url}
                        />
                        <RouterLink to={`/projects/${item.name}}`} className='App-link'>
                            go to project
                        </RouterLink>
                    </ul>
                )
            })}
        </div>
    )
}