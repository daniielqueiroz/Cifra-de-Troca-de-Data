//Modulo para leitura e escrita
const fs = require('fs');

//Verifica se o usuário esqueceu dos argumentos
if (process.argv.length < 5) {
    console.log("O programa requer argumentos!");
    console.log("Tente executar da seguinte forma: \nnode cifrar.js data mensagem.txt mensagem.sec");
    console.log("Onde data: dd/MM/AA");
    console.log("mensagem.txt é a entrada e mensagem.sec é a saída de dados!");
    process.exit(1)
} else {
    //Recupera uma lista com os argumentos digitados
    var args = process.argv.slice(2);

    //Guarda os argumentos em variaveis
    let data = args[0].replace(/\//g, "");
    //Transoforma a mensagem lida em um array para fazer a iteração das letras
    let mensagemLimpa = Array.from(fs.readFileSync(args[1]).toString());
    //Lista de caracteres onde será formada a frase cifrada
    let mensagemCifrada = []
    const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    //Faz a troca das letras por números
    let i = 0;
    mensagemLimpa.forEach((char) => {
        //Reseta o indice da data quando chega no ultimo digito
        if (i > (data.length - 1)) {
            i = 0
        }
        //Verifica se o caractere que está passando é um espaço, se não for ele prossegue para a lógica, se for ele apenas o adiciona a lista
        if (char != " ") {
            for (let g = 0; g < alfabeto.length; g++) {
                if (char.toUpperCase() == alfabeto[g]) {
                    if (g + parseInt(data[i]) >= alfabeto.length) {
                        mensagemCifrada.push(alfabeto[(g + parseInt(data[i])) - alfabeto.length])
                    } else {
                        mensagemCifrada.push(alfabeto[g + parseInt(data[i])])
                    }
                }
            }
            i++
        } else {
            mensagemCifrada.push(char)
        }

    })
    //Transforma o array em string
    mensagemCifrada = mensagemCifrada.toString().replace(/,/g, '')
    //Escreve um arquivo.sec com a mensagem cifrada cujo nome foi passado via argumentos
    fs.writeFileSync(args[2], mensagemCifrada)
    console.log("Mensagem criptografada com sucesso!\nVerifique o arquivo: " + args[2]);
}