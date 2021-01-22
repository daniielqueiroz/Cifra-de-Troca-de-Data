//Modulo para leitura e escrita
const fs = require('fs');

//Verifica se o usuário esqueceu dos argumentos
if (process.argv.length < 3) {
    console.log("O programa requer argumentos!");
    console.log("Tente executar da seguinte forma: \nnode decifrar.js data mensagem.sec");
    console.log("Onde data: dd/MM/AA");
    console.log("mensagem.sec é a entrada de dados!");
    process.exit(1)
} else {
    //Recupera uma lista com os argumentos digitados
    var args = process.argv.slice(2);

    //Guarda os argumentos em variaveis
    let data = args[0].replace(/\//g, "");
    //Transoforma a mensagem lida em um array para fazer a iteração das letras
    let mensagemCifrada = Array.from(fs.readFileSync(args[1]).toString());
    //Lista de caracteres onde será formada a frase limpa
    let mensagemLimpa = []
    const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    let i = 0
    mensagemCifrada.forEach((char) => {
        //Reseta o indice da data quando chega no ultimo digito
        if (i > (data.length - 1)) {
            i = 0
        }
        //Verifica se o caractere que está passando é um espaço, se não for ele prossegue para a lógica, se for ele apenas o adiciona a lista
        if (char != " ") {
            for (let g = 0; g < alfabeto.length; g++) {
                if (char == alfabeto[g]) {
                    if (g - parseInt(data[i]) < 0) {
                        mensagemLimpa.push(alfabeto[alfabeto.length + (g - parseInt(data[i]))])
                    } else {

                        mensagemLimpa.push(alfabeto[g - parseInt(data[i])])
                    }
                }
            }
            i++
        } else {
            mensagemLimpa.push(char)
        }
    })
    //Saída para o usuário
    console.log(mensagemLimpa.toString().replace(/,/g, ''));
}