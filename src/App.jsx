import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import { useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import PATHROUTES from './helpers/PathRoutes.helpers.js';


function App() {

   const [characters, setCharacters] = useState([])//[estado local, funcion que me cambia el estado local]

// [characters, setCharacters] = [estado, funcion]
//characters = estado
//setCharacters = funcion

const example = {
   id: 1,
   name: 'Rick Sanchez',
   status: 'Alive',
   species: 'Human',
   gender: 'Male',
   origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
   },
   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};


const APIKEY = 'pi-hx-aquintero';

function onSearch(id) {
   axios({
     // La URL debe ser proporcionada completa y correctamente
     url: `https://rym2.up.railway.app/api/character/${id}?key=${APIKEY}`,
     method: 'get'
   }).then(({ data }) => {
     if (data.name) {
       // Asumiendo que setCharacters es una función definida previamente para actualizar el estado o realizar alguna acción con los datos obtenidos
       setCharacters(oldChars => [...oldChars, data]);
     } else {
       window.alert('¡No hay personajes con este ID!');
     }
   }).catch(error => {
     // Es importante manejar errores que puedan ocurrir durante la solicitud
     console.error('Hubo un error en la solicitud', error);
     window.alert('Hubo un problema al realizar la búsqueda');
   });
 }
 

 function onClose(id){
   setCharacters(characters.filter((character)=> character.id != Number(id)))  
 }



   return (
      <div className='App'>
         <Navbar onSearch={onSearch} />
          <Routes>
            <Route path={PATHROUTES.HOME} element={<Cards characters={characters} onClose={onClose} />} />
            <Route path={PATHROUTES.ABOUT} element={<About/>} />
            <Route path={PATHROUTES.DETAIL} element={<Detail/>} />
          </Routes>
         
         <hr/>
        
      </div>
   );
}

export default App;
