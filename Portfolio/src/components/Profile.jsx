import { useState } from 'react'
import { useEffect } from 'react'
import './Profile.css'
import { List } from './List'

export const Profile = ({ username }) => {
    const [loading, setLoading] = useState(false)
    const [profile, setProfile] = useState([])

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error('No User found')
            })
            .then(data => {
                setProfile([data])
                console.log([data]);
                setLoading(false)
            })
            .catch(err => {
                console.error(err);
                setLoading(false)
            })
    }, [username])

    return (
        <div className='Profile-container'>
            <h2>About ME</h2>
            {loading ? (
                <span>Loading...</span>
            )
                :
                (
                    <List profile={profile}/>
                )}
        </div>
    )
}