import { useState, useEffect } from 'react'
import { getPokemons } from './services/PokeApi';
import { PokemonList } from './components/PokemonList'
import './App.css'


function App() {
    const [pokemons, setPokemons] = UseState ([]);
    const [loading, setLoading] = UseState (true);

useEffect(() => { 

  async function loadPokemons() {
    const data = await getPokemons(20)
    setPokemons(data)
    setLoading(false) 
  }

  loadPokemons();

}, [])

  return (
      <div>
        <h1>Pokedex</h1>
        {loading ? <p>Cargando...</p> : <PokemonList pokemons = {pokemons} />}
      </div>
  );
}

export default App  
