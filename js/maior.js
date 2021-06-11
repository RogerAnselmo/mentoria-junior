function calculaMaior() {

    let maior = 0;

    for (let i = 0; i < 5; i++) {
        let num = prompt("Informe um número");
        if (parseInt(num) > maior) {
            maior = num;
        }
    }

    alert(`O maior número informado foi ${maior}`);
}