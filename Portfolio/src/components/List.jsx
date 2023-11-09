import { Link } from "./Link"


export const List = ({ items }) => {

    return (
        <div>
            {items.map((item) => {
                return (
                    <ul key={item.id}>
                        <li >
                            <span>{item.html_url}</span>
                            <Link
                                url={item.html_url}
                                title={item.html_url}
                            />
                        </li>
                        <li >
                            <span>{item.repos_url}</span>
                            <Link
                                url={item.repos_url}
                                title={item.repos_url}
                            />
                        </li>
                        <li>
                            <span>Name: </span>
                            {item.name}
                        </li>
                        <li>
                            <span>Company: </span>
                            {item.company}
                        </li>
                        <li>
                            <span>Location: </span>
                            {item.location}
                        </li>
                        <li>
                            <span>Email: </span>
                            {item.email}
                        </li>
                        <li>
                            <span>Bio: </span>
                            {item.bio}
                        </li>

                    </ul>
                )
            })}
        </div>
    )
}