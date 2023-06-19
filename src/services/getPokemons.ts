export const getPokemons = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/generation/1');
    const data = await response.json();

    return data;
};
