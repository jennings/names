import { writable } from "svelte/store";

export const firstNames = writable<readonly string[]>([
  "Alice",
  "Bob",
  "Carol",
]);
export const middleNames = writable<readonly string[]>([]);
export const lastNames = writable<readonly string[]>(["Jennings"]);
