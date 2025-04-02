export function robotChoose() {
    const variants = ['rock', 'paper', 'scissors'];
    const random = Math.trunc(Math.random() * variants.length);
    return variants[random];
}