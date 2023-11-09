import { Link } from "./Link"

export const List = ({profile}) => {

    return(
        <div>
            {profile.map((p, i) => {
                return (

                    <ul key={i}>
                        <img
                            className='Profile-avatar'
                            src={p.avatar_url}
                            alt={p.name}
                        />
                        <li><span>avatar_url: </span>
                            {p.avatar_url}</li>
                        <li><span>html_url: </span>
                            <Link
                                url={profile.html_url}
                                title={profile.html_url}
                            />
                        </li>
                        <li><span>repos_url: </span>
                            <Link
                                url={profile.repos_url}
                                title={profile.repos_url}
                            />
                        </li>
                        <li><span>name: </span> {p.name}</li>
                        <li><span>company: </span>
                            {p.company}</li>
                        <li><span>location: </span>
                            {p.location}</li>
                        <li><span>email: </span>
                            {p.email}</li>
                        <li><span>bio: </span> {p.bio}</li>
                    </ul>
                )
            })}
        </div>
    )
}