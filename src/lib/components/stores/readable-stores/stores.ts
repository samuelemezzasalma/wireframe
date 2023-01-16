import { derived, readable } from 'svelte/store';

export const time = readable(new Date, function start(set) {
	const interval = setInterval(() => {
    set(new Date());
  }, 1000);

	return function stop() {
    clearInterval(interval)
  };
});

const start = new Date();

export const elapsed = derived(time, ($time) => {return Math.round((Number($time) - Number(start)) / 1000)});
