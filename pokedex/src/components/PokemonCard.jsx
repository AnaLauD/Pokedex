import './../App.css';

function PokemonCard({ pokemon }) {

const typeColors = {
  fire: "#F08030",
  water: "#6890F0",
  grass: "#78C850",
  electric: "#F8D030",
  psychic: "#F85888",
  ice: "#98D8D8",
  dragon: "#7038F8",
  dark: "#705848",
  fairy: "#EE99AC",
  poison: "#A040A0",
  flying: "#A890F0",
  bug: "#A8B820",
  normal: "#A8A878",
  ground: "#E0C068",
  rock: "#B8A038",
  steel: "#B8B8D0",
  fighting: "#C03028",
  ghost: "#705898",
};

const mainType = pokemon.types[0].type.name;
const typeColor = typeColors[mainType] || "#e2e2d1ff";


console.log(pokemon);

  return (
    <div className="card" style={{ borderColor: typeColor }}>
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