function pedirLanche() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.3) {
                resolve("Lanche pronto!");
            } else {
                reject("Não foi possível preparar o lanche.");
            }
        }, 1500);
    });
}

console.log("Pedido do lanche iniciado...");
pedirLanche()
    .then((m) => console.log("3.",m))
    .catch((e) => console.log("3. Erro",e));
console.log("Pedido do lanche finalizado...");