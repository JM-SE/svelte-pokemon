import { writable } from 'svelte/store';
import { getPokemons } from '../services/getPokemons';

const pokemons = await getPokemons();

const pokemonSortById = pokemons.pokemon_species.sort((a, b) => {
    const aId = Number(a.url.slice(42).split('/')[0]);
    const bId = Number(b.url.slice(42).split('/')[0]);

    return aId - bId;
});

export const PokemonsStore = writable(pokemonSortById);
