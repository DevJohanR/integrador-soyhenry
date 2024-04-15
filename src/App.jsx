import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import PATHROUTES from './helpers/PathRoutes.helpers.js';
import Form from './components/Form/Form.jsx';


function App() {

   const { pathname } = useLocation();

   const navigate = useNavigate();

   const [characters, setCharacters] = useState([]);//[estado local, funcion que me cambia el estado local]

   const [access, setAccess]= useState(false);

   const EMAIL = 'johan@johan.com'
   const PASSWORD = '123456'

   function login(userData) {
    console.log("Intentando iniciar sesión con:", userData); // Esto mostrará los datos que se están intentando usar para iniciar sesión
  
    if (userData.password === PASSWORD && userData.email === EMAIL) {
       console.log("Credenciales correctas, otorgando acceso..."); // Esto se mostrará si las credenciales son correctas
       setAccess(true);
       navigate('/home');
    } else {
       console.log("Credenciales incorrectas."); // Esto se mostrará si las credenciales no coinciden
    }
  }
  

 useEffect(() => {
  !access && navigate('/');
}, [access]);
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
         {pathname !== '/' && <Navbar onSearch={onSearch} />}
          <Routes>
          <Route path={PATHROUTES.LOGIN} element={<Form login={login} />} />
            <Route path={PATHROUTES.HOME} element={<Cards characters={characters} onClose={onClose} />} />
            <Route path={PATHROUTES.ABOUT} element={<About/>} />
            <Route path={PATHROUTES.DETAIL} element={<Detail/>} />
          </Routes>
         
         <hr/>
        
      </div>
   );
}

export default App;
