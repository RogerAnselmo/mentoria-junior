function calculaRaiz() {

    for (let i = 0; i < 5; i++) {
        let n = prompt("Informe o número cujo quadrado será calculado: ");
        let sqr = Math.sqrt(parseFloat(n));
        console.log(`Quadrado do número ${n} = ${sqr}`);
    }
}