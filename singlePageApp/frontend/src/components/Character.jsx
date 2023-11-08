

export const Character = (character) => {
    return (
        <div>
            <h1>Character</h1>
            <h3>{character.name}</h3>
            <img src={character.image} alt={character.name} />
            <p>{`Origin: ${character.origin && character.origin.name}`}</p>
        </div>
    )
}