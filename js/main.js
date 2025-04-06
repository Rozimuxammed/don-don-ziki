import { changeModeInner } from "./changeMode.js";
import { changer } from "./changer.js";
import { btns, changeMode, modeInner, playAgain, rules, rulesModal } from "./getHtmlElements.js";
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

changeMode.addEventListener('click', function () {
    changeModeInner(modeInner,)
});

rules.addEventListener('click', function () {
    rulesModal.showModal()
})

document.addEventListener('click', function (e) {
    if (e.target === rulesModal) {
        rulesModal.close()
    }
}
)