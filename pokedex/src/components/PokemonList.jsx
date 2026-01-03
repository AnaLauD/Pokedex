import { useEffect, useState } from "react";
import { getPokemons } from "../services/PokeApi";
import PokemonCard from "./PokemonCard";

function PokemonList() {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPokemons = async () => {
            const data = await getPokemons(100);

            const detailedData = await Promise.all(
                data.results.map(async (pokemon) => {
                    const response = await fetch(pokemon.url);
                    return await response.json();
                })
            );

            setPokemons(detailedData);
            setLoading(false);
        };
            fetchPokemons();

        }, []); 
    
    
    if (loading) return <p>Cargando pokemones...</p>;

    return (
        <div className="pokemon-grid">
            {pokemons.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>
    )
}
    export default PokemonList;