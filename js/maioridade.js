function maior18() {

    let maiorIdade = [];
    let diMenor = [];

    let qntd = prompt("Informe a quantidade de dados a serem armazenados")

    for (let i = 0; i < qntd; i++) {
        let nome = prompt(`Informe o nome do indivíduo ${i + 1}`)
        let idade = prompt(`Qual a idade do indivíduo ${i + 1} ?`)

        if (parseInt(idade) > 18) {
            maiorIdade.push(nome);
        }
        else {
            diMenor.push(nome);
        }
    }

    console.log(`Os indivíduos de maior idade são: ${maiorIdade}`);
    console.log(`Os indivíduos de menor são: ${diMenor}`);
}