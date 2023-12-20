

function Characters({ characters }) {
    return (
         <div className="container-character">
            { characters.map((character, indice) =>(
                <div key={indice}>
                    <div className="card-character">
                        <img className="image" src={character.image} alt="personaje" />
                        <div>
                            <h5>{character.name}</h5>
                            <hr />
                            <p>Especie: {character.species}</p>
                            <p>ubicacion: {character.location.name}</p>
                        </div>

                    </div>

                </div>
            )
            ) }
         </div>
    )   
}

export default Characters;