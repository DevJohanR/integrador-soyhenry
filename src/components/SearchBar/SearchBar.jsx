import { useState } from "react";

export default function SearchBar(props) {

   const [id, setId] = useState('');

   function handleChange(event){
setId (event.target.value);
console.log(event.target.value)
   }

   return (
      <div>
         <input type='search' value={id} onChange={handleChange}/>
         <button onClick={()=> props.onSearch(id)}>Agregar</button>
         
      </div>
   );
}
/* cuando las funciones necesitan un parámetro un id no las puedo pasar asi como si nada, tengo que pasarle una función para que el evento ejecute la función que necesita el parametro*/