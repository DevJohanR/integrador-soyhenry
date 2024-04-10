import './App.css';
import Card from './components/Card/Card.jsx';
import Cards from './components/Cards/Cards.jsx';

import Navbar from './components/Navbar/Navbar.jsx';
import { useState } from 'react';


function App() {
   return (
      <div className='App'>
         <Navbar onSearch={(characterID) => window.alert(characterID)} />
        
         <Cards characters={characters} />
         <hr/>
        
      </div>
   );
}

export default App;
