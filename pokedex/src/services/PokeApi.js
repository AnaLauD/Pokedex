const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export async function getPokemons(limit = 20) {
  const response = await fetch(`${BASE_URL}?limit=${limit}`);
  const data = await response.json();
  return data;
}
