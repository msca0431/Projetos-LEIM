// Exportação de funções úteis
export function formatDate(data) {
    return data.toLocaleDateString('pt-PT');
}

export function createId() {
    return Math.random().toString(36).substr(2, 9);
}

// Exportação de objeto
export const config = {
    version: "1.0.0",
    author: "Professor"
};