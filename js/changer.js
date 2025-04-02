import { playAgain, robot, score, user, whoWinner } from "./getHtmlElements.js";
import { robotChoose } from "./robotChoose.js";
import { winner } from "./winner.js";

export function changer(variant) {
    user.src = `./imgs/${variant}.svg`;
    
    setTimeout(() => {
        const AI = robotChoose();
        robot.src = `./imgs/${AI}.svg`;
        const winnerText = winner(variant, AI);
        whoWinner.innerText = winnerText;
        
        [user, robot].forEach(el => el.classList.remove("shadow-blur", "duration-300", "rounded-full"));
        
        if (winnerText === "You win!") {
            score.innerText = +score.innerText + 1;
            user.classList.add("shadow-blur", "duration-300", "rounded-full");
        } else if (winnerText === "Robot wins!") {
            if (+score.innerText > 0) score.innerText = +score.innerText - 1;
            robot.classList.add("shadow-blur", "duration-300", "rounded-full");
        }
        
        playAgain.classList.remove("hidden");
    }, 1000);
}
