import { gameZone, secondGameZone } from "./getHtmlElements.js";

export function swap() {
    gameZone.classList.toggle('hidden');
    secondGameZone.classList.toggle('hidden');
}