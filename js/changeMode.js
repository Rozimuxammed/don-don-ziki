import { changeMode, rulesImage } from "./getHtmlElements.js";

export function changeModeInner(value) {
    if (value.dataset.mode === "simple") {
        value.dataset.mode = "advenced";
        changeMode.innerText = "simple"
        rulesImage.src = "./imgs/rule-advanced.svg"
    } else if (value.dataset.mode === "advenced") {
        value.dataset.mode = "simple";
        rulesImage.src = "./imgs/rule-basic.svg"
        changeMode.innerText = "advanced"
    } else {
        value.dataset.mode = "simple";
        rulesImage.src = "./imgs/rule-basic.svg"
        changeMode.innerText = "advanced"
    }
}