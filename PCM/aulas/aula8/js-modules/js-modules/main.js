// Importações diferentes
import calculateArea, { sum, multiply, PI } from './modules/math.js';
import { User, users } from './modules/user.js';
import * as Utils from './modules/utils.js'; // Importação de tudo como objeto

// Usando as funções do módulo math
console.log("Soma:", sum(5, 3));
console.log("Multiplicação:", multiply(4, 7));
console.log("Área do círculo:", calculateArea(5));
console.log("PI:", PI);

// Usando a classe do módulo user
const newUser = new User("Maria", "maria@email.com");
console.log(newUser.greet());
console.log("Lista de users:", users);

// Usando o módulo utils
console.log("Data atual:", Utils.formatDate(new Date()));
console.log("ID único:", Utils.createId());
console.log("Configurações:", Utils.config);

// Função que usa vários módulos
function fullExample() {
    const resultado = multiply(sum(2, 3), 4);
    const user = new User("Carlos", "carlos@email.com");
    const id = Utils.createId();
    
    return {
        calculo: resultado,
        user: user.greet(),
        id: id,
        data: Utils.formatDate(new Date())
    };
}

console.log("Exemplo completo:", fullExample());