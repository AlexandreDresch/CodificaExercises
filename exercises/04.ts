import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

function showMenu() {
  console.log("\nVocê está na Caverna de Platão!");
  console.log("O que deseja fazer:");
  console.log("1. Continuar na caverna.");
  console.log("2. Olhar para a luz.");
  console.log("3. Sair da caverna.\n");
}

function selectOption(option: string) {
  switch (option) {
    case "1":
      console.log(
        "\nPor essa eu não esperava. Mas ok, nada como passar a vida toda olhando para sombras e achando que está vendo a realidade.\n"
      );
      rl.close();
      return;
    case "2":
      console.log(
        "\nVocê escolheu olhar para a luz. Não se preocupe, seus olhos começarão a se ajustar e você terá dado o primeiro passo para ver o mundo além das sombras.\n"
      );
      rl.close();
      return;
    case "3":
      console.log(
        "\nSair da caverna, hein? Hora de alcançar a verdade e o conhecimento, e finalmente compreender a realidade como ela é.\n"
      );
      rl.close();
      return;
    default:
      console.log(
        "\nOpção inválida. Sério, era só escolher um número entre 1 e 3. Vou te dar outra chance.\n"
      );
      break;
  }

  main();
}

function main() {
  showMenu();
  rl.question("Digite o número da sua escolha: ", selectOption);
}

main();

// Sem exemplos aqui, rode o script :)
