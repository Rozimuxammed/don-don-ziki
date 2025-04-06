const gameZone = document.getElementById('gameZone'),
    secondGameZone = document.getElementById('secondGameZone'),
    user = document.getElementById("user"),
    robot = document.getElementById("robot"),
    btns = document.querySelectorAll('.btns'),
    whoWinner = document.getElementById('whoWinner'),
    score = document.getElementById('score'),
    changeMode = document.getElementById('changeMode'),
    modeInner = document.getElementById('modeInner'),
    rules = document.getElementById('rules'),
    rulesModal = document.getElementById("rulesModal"),
    rulesImage = document.getElementById("rulesImage"),
    playAgain = document.getElementById('play-again');

export {
    gameZone, secondGameZone, user, robot, btns, playAgain, whoWinner, score, changeMode, modeInner, rules, rulesModal, rulesImage
};