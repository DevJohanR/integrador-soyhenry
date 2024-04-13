import React from 'react'
import { useState, useEffect } from 'react' 
import { useParams } from 'react-router-dom' 
import axios from 'axios'
const Detail = () => {
  const {id} = useParams();
const [character, setCharacter] = useState({})

const APIKEY = 'pi-hx-aquintero';

useEffect(() => {
  axios(`https://rym2.up.railway.app/api/character/${id}?key=${APIKEY}`).then(
     ({ data }) => {
        if (data.name) {
           setCharacter(data);
        } else {
           window.alert('No hay personajes con ese ID');
        }
     }
  );
  return setCharacter({});
}, [id]);

  return (
    <div>




<h2>{character?.name} </h2>

<h2>{character?.status} </h2>
<h2>{character?.species} </h2> 
<h2>{character?.gender} </h2>
<h2>{character.origin?.name} </h2>
<img src={character?.image} alt="" /> 
    </div>
  )
}

export default Detail