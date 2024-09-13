# Lista de Exercícios

Este projeto contém uma série de exercícios em TypeScript separados em listas, cada um em um arquivo `.ts` separado.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
/exercises
├── /list01
│   ├── 01.ts
│   ├── 02.ts
│   ├── 03.ts
│   └── ...
├── /list02
│   ├── 01.ts
│   ├── 02.ts
│   ├── 03.ts
│   └── ...
```

Cada arquivo contém uma solução para um exercício específico.

## Configuração do Ambiente

Para começar, você precisa configurar o ambiente de desenvolvimento.

1. Clone o repositório:
   ```bash
   git clone https://github.com/AlexandreDresch/CodificaExercises.git
   ```
2. Vá para a pasta do projeto:
   ```bash
   cd CodificaExercises
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

## Executando os Exercícios

Cada exercício pode ser executado individualmente usando o `ts-node`. Os scripts são definidos no arquivo `package.json` e podem ser executados com os seguintes comandos:

- **Exercício 01 da lista 01:** npm run list01exercise01
- **Exercício 02 da lista 01:** npm run list01exercise02
- **Exercício 03 da lista 01:** npm run list01exercise03
- [...]
- **Exercício 01 da lista 02:** npm run list02exercise01
- [...]

## Dependências

Este projeto utiliza as seguintes dependências para execução e desenvolvimento:

- @types/node: Tipos TypeScript para Node.js.
- ts-node: Executa arquivos TypeScript diretamente.
- typescript: O compilador TypeScript.
- prompt-sync: Biblioteca para ler entrada do usuário de forma síncrona.
