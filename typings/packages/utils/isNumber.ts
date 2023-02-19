export function isNumber(n: any) {
    return typeof n === "number";
}

export function isStringNumber(n: string) {
    return typeof parseInt(n);
}
