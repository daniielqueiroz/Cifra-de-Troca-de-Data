# Cifra-de-Troca-de-Data
Atividade da disciplina de Segurança de Redes ministrada no IMD/UFRN, consiste em criptografar/descriptografar uma mensagem através do método de troca de data.

# Requisitos
- Node.js

# Como usar
  # Instalar as dependencias
    1 - No terminal, dentro do diretório Cifra-de-Troca-de-Data, execute o comando "npm install" para instalar as dependencias do projeto

  # - Para cifrar:
    1 - Preencha a mensagem desejada no arquivo mensagem.txt ou um de sua preferencia
    2 - Execute o comando "node cifrar.js DATA MENSAGEM_EM_CLARO.txt MENSAGEM_CIFRADA.sec"
    3 - O formato da data é mm/MM/yy e MENSAGEM_EM_CLARO e MENSAGEM_CIFRADA são entrada e saída de dados respectivamente
    4 - Se tudo deu certo você receberá uma mensagem de sucesso.
    
 # - Para decifrar:
    1 - Execute o comando "node decifrar.js DATA MENSAGEM_CIFRADA.sec"
    2 - Onde a data é a mesma usada para cifrar
    3 - Se tudo deu certo você receberá a mensagem decifrada no terminal.
    
# Limites do código:
Por enquanto só é possível cifrar/decifrar mensagens sem caracteres especiais e números.
