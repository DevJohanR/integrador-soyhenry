import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import { useState } from 'react';
import axios from 'axios';


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


function onSearch (id){
   setCharacters([...characters, example]) 
}



   return (
      <div className='App'>
         <Navbar onSearch={onSearch} />
        
         <Cards characters={characters} />
         <hr/>
        
      </div>
   );
}

export default App;
