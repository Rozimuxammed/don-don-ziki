import { playAgain, robot, user, whoWinner } from "./getHtmlElements.js";
import { swap } from "./swapper.js";

export function refreshGame() {
    swap()
    whoWinner.innerText = '';
    robot.src = "./imgs/oval.svg";
    playAgain.classList.add('hidden');
    user.classList.remove("shadow-blur")
    robot.classList.remove("shadow-blur")
}