import { useState, useEffect } from 'react';
import Characters from './components/Characters';
import Paginacion from './Paginacion.jsx';
import './Paginacion.css'
function App() {
  const [characters, setCharacters] = useState([])

  //estado donde se guarda pagina proxima y anterior
  const [info, setInfo] = useState([]);
  //enlace a la api
  const initialUrl = "https://rickandmortyapi.com/api/character"

  //obtengo los personajes
  function fetchCharacters(url) {
    //llamado a la api
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(datos =>{
      setCharacters(datos.results);
      setInfo(datos.info)
      console.log(datos.info)
    })
    .catch(error => console.log(error));
  }
  useEffect(() => {
  fetchCharacters(initialUrl)
  }, [] )

  const retroceder = () =>(
    fetchCharacters(info.prev)
  );

  const adelantar = () =>{
    fetchCharacters (info.next)
  }



  return <>
  <Paginacion 
  prev={info.prev}
  next={info.next}
  adelantar={adelantar}
  retroceder={retroceder}/>
  <Characters characters = {characters}/>
  </> 
}

export default App
