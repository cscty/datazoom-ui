export function isNumber(n: number) {
    return typeof n === "number";
}

export function isStringNumber(n: string) {
    return typeof parseInt(n);
}
