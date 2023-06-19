export const getPokemon = async (query) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
    const data = await response.json();

    return data;
};
