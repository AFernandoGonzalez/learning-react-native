import { useState, useEffect } from "react"
import { Character } from "./Character"


export const List = () => {
    const [loading, setLoading] = useState(true)
    const [characters, setCharacters] = useState([])


    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error('Something went wrong while fetching the data')
            })
            .then(data => {
                setCharacters(data.results)
                console.log(data.results);
                setLoading(false)
            })
            .catch(err => {
                console.log(err);
                setLoading(false)
            })
    }, [])

    return (
        <div>
            <h1>Characters</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                characters.map((character) => (
                    <Character
                        key={character.id}
                        name={character.name}
                        origin={character.origin}
                        image={character.image}

                    />

                ))
            )}

        </div>
    )
}