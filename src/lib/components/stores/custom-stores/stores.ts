import { writable } from 'svelte/store';

function createCount() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: (value: number) => { update((value) => value + 1) },
		decrement: (value: number) => {update((value) => value - 1)},
		reset: () => {set(0)}
	};
}

export const count = createCount();
