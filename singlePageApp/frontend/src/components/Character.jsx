import { Card } from "react-bootstrap"

export const Character = (character) => {
    return (
        <Card className="">
            <img style={{width: "100%"}} src={character.image} alt={character.name} />
            <div className="p-1">
                <p>{character.name}</p>
                <span style={{ fontSize: "12px" }}>{`Origin: ${character.origin && character.origin.name}`}</span>
            </div>
        </Card>
    )
}