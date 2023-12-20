
function Paginacion({prev, next, retroceder, adelantar}) {

    const handleRetroceder = () => {
        retroceder();
    }

    const handleAdelantar = () => {
        adelantar();
    }
    

    return(
        <div>
            <nav>
                <ul className="nav-button-container">
                     { prev ? (< li> <button onClick={handleRetroceder}>Pagina previa</button> </li>) : null }

                   { next ? (<li> <button onClick={handleAdelantar}>Proxima pagina</button> </li>) : null}
                </ul>
            </nav>
        </div>
    )
}

export default Paginacion;