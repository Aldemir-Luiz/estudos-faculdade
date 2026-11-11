function pedirLanche() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.3) {
                resolve("Lanche pronto!");
            } else {
                reject(new Error("Não foi possível preparar o lanche."));
            }
        }, 1500);
    });
}

console.log("Pedido do lanche iniciado...");

pedirLanche()
    .then((mensagem) => console.log("3.", mensagem))
    .catch((erro) => console.error("3. Erro", erro.message))
    .finally(() => console.log("Pedido do lanche finalizado."));