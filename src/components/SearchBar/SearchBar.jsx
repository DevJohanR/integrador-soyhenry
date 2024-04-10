export default function SearchBar(props) {
   return (
      <div>
         <input type='search' />
         <button onClick={()=>props.onSearch('Hola soy un id')}>Agregar</button>
      </div>
   );
}
