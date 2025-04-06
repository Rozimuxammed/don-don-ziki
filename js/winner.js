export function winner(user, robot) {
    if (user === robot) {
        return "Friendship wins!";
    }
    else if ((user === "rock" && (robot === "scissors" || robot === "lazy")) ||
        (user === "scissors" && (robot === "paper" || robot === "lazy")) ||
        (user === "paper" && (robot === "rock" || robot === "pappy")) ||
        (user === "lazy" && (robot === "paper" || robot === "pappy")) ||
        (user === "pappy" && (robot === "scissors" || robot === "rock"))) {
        return "You win!";
    }
    else {
        return "Robot wins!";
    }
}