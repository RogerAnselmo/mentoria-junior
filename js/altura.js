function mostraAltura() {

    let maiorAltura = 0;
    let masc = [];
    let femi = [];

    for (let i = 0; i < 5; i++) {
        let nome = prompt(`Informe o nome do indivíduo ${i + 1}`);
        let sexo = prompt(`Qual o sexo de ${nome} ?`);
        let altura = prompt(`Qual a altura de ${nome} ?`);

        if (sexo == "masculino") {
            masc.push(nome);
        }
        else {
            femi.push(nome);
        }

        if (altura > maiorAltura) {
            maiorAltura = altura;
        }
    }

    console.log(`Os ${masc.length} indivíduos do sexo masculino são: ${masc}`);
    console.log(`Os ${femi.length} indivíduos do sexo feminino são: ${femi}`);
    console.log(`A maior altura é ${maiorAltura}`);
}