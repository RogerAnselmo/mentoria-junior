function calculaMedia() {

    let total = 0.0;
    let media = 0.0;
    let qntd;

    qntd = prompt("Quantas notas serão informadas?");

    for (let i = 1; i <= qntd; i++) {
        let nota = prompt(`Informe a nota ${i}`);
        total += parseFloat(nota);
        console.log(`Valor de "total" na iteração ${i}: ${total}`);

    }

    media = total / qntd;
    alert(`A média das notas informadas é: ${media}`);
}