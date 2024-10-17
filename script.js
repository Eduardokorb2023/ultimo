const color1 = { r: 142, g: 174, b: 0 };
const color2 = { r: 0, g: 174, b: 110 };
let isColor1 = true;

function interpolateColor(colorA, colorB, factor) {
    const result = {
        r: Math.round(colorA.r + (colorB.r - colorA.r) * factor),
        g: Math.round(colorA.g + (colorB.g - colorA.g) * factor),
        b: Math.round(colorA.b + (colorB.b - colorA.b) * factor),
    };
    return `rgb(${result.r}, ${result.g}, ${result.b})`;
}

function changeBackgroundColor() {
    const factor = isColor1 ? 0 : 1; // Alterna entre 0 e 1
    document.body.style.backgroundColor = interpolateColor(color1, color2, factor);
    isColor1 = !isColor1; // Troca a cor
}

// Chama a função a cada 2 segundos
setInterval(changeBackgroundColor, 2000);
