// Exportação individual
export function sum(a, b) {
    return a + b;
}

export function multiply(a, b) {
    return a * b;
}

// Exportação default (apenas uma por módulo)
export default function calculateArea(radius) {
    return Math.PI * radius * radius;
}

// Exportação de constante
export const PI = 3.14159;