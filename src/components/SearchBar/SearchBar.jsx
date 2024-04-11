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
         <button onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
