import { writable } from "svelte/store";

export const players = writable([]);

export const rounds = writable(5);