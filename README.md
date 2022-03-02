![Logo Marvel](./docs/banner.png)

# :superhero: Marvel Characters

O Marvel Characters é um site onde é possivel ver os personagens da marvel, informações sobre eles e criar uma lista com os seus personagens favoritos.

### Tecnologias utilizadas
Para a construção do site, foram utilizadas as seguintes tecnologias:

- React
- JavaScript
- Styled Component
- Context API
- Local Storage
- React Testing Library
- Cypress


## :rocket: Como executar:

Para rodar o projeto é necessário ter o [Node.js](https://nodejs.org/en/) e o [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) instalados

Primeiro, instale as dependências do projeto:

```
yarn install
```

E para subir o projeto:

```
yarn start
```

O site ficará disponível em http://localhost:3000/


## :test_tube: Testes

Para rodar os testes:

```
yarn tests
```

Para gerar o relatório de coverage: 

```
yarn tests --coverage --watchAll=false
```
### Cypress
Para rodar os testes do cypress, é necessários estar com o servidor do projeto rodando.

Para rodar os testes do cypress pelo terminal:

```
yarn cypress run
```
Também é possivel rodar os testes do cypress pela interface:

```
yarn cypress open
```
