import { useState, useEffect } from "react"
import { Character } from "./Character"
import Button from 'react-bootstrap/Button';
import { Container, Col, Row } from "react-bootstrap";

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
                setLoading(false)
            })
            .catch(err => {
                console.log(err);
                setLoading(false)
            })
    }, [])

    return (
        <Container fluid>
            <h1>Characters</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <Row>
                    {characters.map(character => (
                        <Col xs={12} md={8} lg={6} xl={4}
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

        </Container>
    )
}