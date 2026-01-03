import './../App.css';

function PokemonCard({ pokemon }) {
  return (
    <div className="card">
    <img src={pokemon.sprites.front_default} alt={pokemon.name}/>   
      <h3>{pokemon.name}</h3>
      <p>Altura: {pokemon.height}</p>
        <p>Peso: {pokemon.weight}</p>
    </div>
  );
}

export default PokemonCard;