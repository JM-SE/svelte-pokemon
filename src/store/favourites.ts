import { writable } from 'svelte/store';

const stored = localStorage.content;

export const FavouritesStore = writable(stored || []);

FavouritesStore.subscribe((value) => (localStorage.content = value));
