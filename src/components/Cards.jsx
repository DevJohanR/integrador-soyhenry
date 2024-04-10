import Card from './Card';

export default function Cards({ characters }) {
   return (
      <div>
         {characters.map((character)=>{
            return(
               <Card
               key={character.id}
               name ={character.name}
               status={character.status}
               species={character.species}
               image={character.image}
               origin={character.origin.name}
               onClose={() => window.alert('Emulamos que se cierra la card')}
               />
            )
         })}
      </div>
   )
}
