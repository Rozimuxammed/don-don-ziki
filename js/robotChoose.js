export function robotChoose(mode) {
    const variants = mode === "advenced" ? ['rock', 'paper', 'scissors', 'lazy', 'pappy'] : ['rock', 'paper', 'scissors'];
    const random = Math.trunc(Math.random() * variants.length);
    return variants[random];
}