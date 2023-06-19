<script lang="ts">
	import {  Link } from "svelte-navigator";
	import { PokemonsStore } from '../../store/pokemons'
	import { FavouritesStore } from '../../store/favourites'
    import { capitalize } from "../../util/capitalize";
</script>

<div>
    <h1>Gen. I Pokémon Favourites List</h1>

    <div class="favs-list">
        {#if $FavouritesStore.length === 0}
            <div>Add a Pokémon!</div>
        {/if}
        {#each $FavouritesStore as favourite}
        <div class="list-item">{capitalize(favourite)}</div>
        {/each}

    </div>

    <button class="clear-btn" on:click={() => FavouritesStore.update(() => [])}>
        Clear Favs
    </button>

    <div class="list">
        {#each $PokemonsStore as pokemon, i (pokemon.name)}
            <Link to={pokemon.name}>
                <div class="list-item">
                    {i + 1}: {capitalize(pokemon.name)}
                </div>
            </Link>
        {/each}
    </div>
</div>

<style>
    .favs-list {
        position: relative;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
        border: 1px solid white;
        border-radius: 15px;
        padding: 30px;
        box-sizing: border-box;
	}

    .clear-btn {
        float: right;
        margin: 20px 0 40px 0;
    }

	.list {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
        margin: 40px 0;
	}

	.list-item {
		padding: 10px;
        margin: 5px;
        border: 1px solid white;
        border-radius: 15px;
        color: aliceblue;
	}
</style>