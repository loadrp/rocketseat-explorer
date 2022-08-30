export function calcIMC(height, weight) {

    const IMC = ((weight / (height * height))*10000).toFixed(2);
    return IMC;
}

export function notNumber(value) {
    console.log(isNaN(value))
    return isNaN(value) || value == ""
}