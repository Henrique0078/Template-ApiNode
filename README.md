# Template para Desenvolvimento de API em NODE.JS com Prisma ORM
Este repositório consiste em um template pronto para o desenvolvimento de APIs em NODE.JS e Typescript, utilizando o ORM Prisma. Ele inclui uma série de bibliotecas e ferramentas essenciais para iniciar o desenvolvimento de maneira rápida e eficiente.

## Bibliotecas e Ferramentas Incluídas
- **Express:** Framework web para NODE.JS para criar APIs de forma mais simplificada.</br>
- **prisma/client:** Cliente do Prisma, permitindo a interação com o banco de dados.</br>
- **@types/express -D:** Tipos do Express para TypeScript.</br>
- **@types/node -D:** Tipos do Node para TypeScript.</br>
- **eslint -D:** Ferramenta de linting para manter um padrão de código consistente.</br>
- **@typescript-eslint/eslint-plugin -D:** Plugin do ESLint específico para TypeScript.</br>
- **@typescript-eslint/parser -D:** Parser do ESLint para TypeScript.</br>
- **typescript -D:** Linguagem de programação que adiciona tipagem estática ao JavaScript.</br>
- **ts-node-dev -D:** Ferramenta para reiniciar automaticamente o servidor quando há alterações no código.</br>
- **prisma -D:** ORM que permite a interação com o banco de dados usando uma DSL (Domain Specific Language).</br>

## Configurações Adicionais
- **ESLint Configurado:** O ESLint está configurado para garantir que as strings usem aspas duplas e que cada linha de código termine com ponto e vírgula.</br>
- **Indentação com Tabs:** O código segue uma convenção de indentação usando tabs.</br>

## Como Utilizar
Para utilizar este template, basta clonar o repositório e instalar as dependências utilizando o gerenciador de pacotes NPM, para isto, basta precionar "ctrl + j" e no terminal digitar o comando disponivel abaixo. Após isso, você pode começar a desenvolver sua API com Prisma ORM e as ferramentas já configuradas.

Exemplo de como instalar as dependências pré setadas no template:
```
npm i
```

Certifique-se de configurar seu banco de dados no arquivo .env e posteriormente adicionalo no gitignore para dar segurança ao seu projeto. Conforme necessário para começar a utilizar o Prisma.

## Extensões recomendadas para Visual Studio Code
Recomendo a instalação das seguintes extensões no VS Code para melhorar o ambiente de desenvolvimento:

- **ESLint**: Auxilia no linting do código, ajudando a manter um padrão de qualidade e identificar possíveis erros ou problemas de formatação.
- **JavaScript and TypeScript Nightly**: Fornece suporte avançado para JavaScript e TypeScript no VS Code, incluindo recursos mais recentes e em fase de teste.
- **Nodejs Snippets**: Oferece snippets (trechos de código) úteis para o desenvolvimento em Node.js, permitindo uma escrita mais rápida e eficiente.
- **Prisma**: Proporciona suporte e ferramentas para o Prisma ORM, facilitando o desenvolvimento e a interação com o banco de dados.
- **Prisma Import**: Essa extensão auxilia na importação de modelos e arquivos do Prisma, ajudando a organizar e gerenciar os recursos do Prisma de forma mais eficiente.


## Testando o template
Para testar se tudo foi instalado corretamente e está funcionando, basta digitar o seguinte codigo no terminal:

```
npm run dev
```

E então ao acessar a url local com a porta 8000 ``http://localhost:8000`` que foi definida em src\server.ts a mensagem "Hello World!" deve aparecer no seu navegador.
<hr>

Sinta-se à vontade para contribuir, reportar problemas ou fazer sugestões para a melhoria deste template. Seja bem-vindo(a)!
