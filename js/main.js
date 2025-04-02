import { changer } from "./changer.js";
import { btns, playAgain } from "./getHtmlElements.js";
import { refreshGame } from "./refreshGame.js";
import { swap } from "./swapper.js";

btns.forEach(btn => {
    btn.addEventListener('click', function (e) {
        changer(e.target.alt)
        swap()
    })
})

playAgain.addEventListener('click', function () {
    refreshGame()
})