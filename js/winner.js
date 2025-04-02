export function winner(user, robot) {
    if (user === robot) {
        return "Friendship wins!";
    }
    else if (user === "rock" && robot === "scissors" || user === "scissors" && robot === "paper" || user === "paper" && robot === "rock") {
        return "You win!";
    }
    else {
        return "Robot wins!";
    }
}