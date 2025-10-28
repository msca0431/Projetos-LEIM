// Exportação de uma classe
export class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    
    greet() {
        return `Olá, eu sou ${this.name}!`;
    }
}

// Exportação de array
export const users = [
    { nome: "Ana", idade: 25 },
    { nome: "João", idade: 30 }
];