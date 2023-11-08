import { useState, useEffect } from "react"
import { Character } from "./Character"
import { Container, Col, Row } from "react-bootstrap";

const CHARACTERS_API_ENDPOINT = "https://rickandmortyapi.com/api/character"

export const List = () => {
    const [loading, setLoading] = useState(true)
    const [characters, setCharacters] = useState([])
    const [error, setError] = useState("")

    useEffect(()=>{
        fetch(CHARACTERS_API_ENDPOINT)
            .then(res => {
                if(res.ok){
                    return res.json()
                }
                throw new Error("No Data Available")
            })
            .then(data =>{
                setCharacters(data.results)
                setLoading(false)
            })
            .catch(error => {
                console.log(error.message);
                setLoading(false)
                setError(error.message)
            })
    }, [characters.length])

    

    return (
        <Container className="flex justify-content-center align-items-center">
            <h1>Characters</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                    <Row className="justify-content-center align-items-center">
                    {characters.map(character => (
                        <Col xs={8} md={4} lg={3} className="p-2"
                                key={character.id}>
                            <Character
                                name={character.name}
                                origin={character.origin}
                                image={character.image}
                            />
                        </Col>
                    ))}
                </Row>
            )}

            {error? error : ""}

        </Container>
    )
}