<script lang="ts">
	import { Router, Route  } from "svelte-navigator";
	import PokemonData from './components/PokemonData/PokemonData.svelte'
	import PokemonList from './components/PokemonList/PokemonList.svelte'
</script>

<Router>
	<Route path="/">
		<PokemonList />
	</Route>

	<Route path=":query" let:params>
		<PokemonData query={params.query} />
	</Route>
</Router>