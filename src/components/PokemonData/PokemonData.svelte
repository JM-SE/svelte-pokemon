<script lang="ts">
    import { Link  } from "svelte-navigator";
    import { onMount } from "svelte";
    import { FavouritesStore } from '../../store/favourites'
    import { getPokemon } from '../../services/getPokemon'
    import { capitalize } from "../../util/capitalize";

    export let query: string;
    let pokemonData;
    $: favExists = $FavouritesStore.length > 0 && $FavouritesStore.find(i => i === query);

    const onFavouriteClick = (pkmName) => {
        FavouritesStore.update((data) => [...data, pkmName])
    }

    const onDeleteClick = (pkmName) => {
        FavouritesStore.update((data) => data.filter(i => i !== pkmName))        
    }

    onMount(async () => {
        const data = await getPokemon(query);
        pokemonData = data;
    });
</script>

<div>
    <Link to="/">Back</Link>
    <h1>{capitalize(query)}</h1>
    {#if pokemonData}
        <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
        <div class="data-list">
            <div>~ PokéDex Number: {pokemonData.id}</div>
            <div>~ Height: {pokemonData.height}</div>
            <div>~ Weight: {pokemonData.weight}</div>
            ~ Type/s:
            {#each pokemonData.types as type}
                <div class="type-item">{capitalize(type.type.name)}</div>
            {/each}
            ~ Stats:
            {#each pokemonData.stats as stat}
                <div class="type-item">{`${capitalize(stat.stat.name)}: ${stat.base_stat}`}</div>
            {/each}
        </div>
    {/if}
    {#if favExists === query}
        <button on:click={() => onDeleteClick(pokemonData.name)}>Delete Fav</button>
        
        {:else}
            <button on:click={() => onFavouriteClick(pokemonData.name)}>Favourite</button>
    {/if}
    
</div>

<style>
    h1 {
        margin: 30px 0 0 0;
    }

    img {
        width: 200px;
    }

    .data-list {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
        margin-bottom: 30px;
    }

    .type-item {
        margin-left: 20px;
    }
</style>