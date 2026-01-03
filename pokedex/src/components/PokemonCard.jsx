import './../App.css';

function PokemonCard({ pokemon }) {

console.log(pokemon);

  return (
    <div className="card">
    <img src={pokemon.sprites.front_default} alt={pokemon.name}/>   
      <h3>{pokemon.name}</h3>
      <p>Altura: {pokemon.height}</p>
        <p>Peso: {pokemon.weight}</p>
        <div className="types">
            <ul>
        {pokemon.types.map((item) => (
          <span key={item.type.name} className="type">
            <li>{item.type.name}</li>
          </span>
        ))}
        </ul>
      </div>
    </div>
  );
}

export default PokemonCard;