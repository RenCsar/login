<h1 align="center">
 <img align="center" width="150" height="150" src="public/favicon.png"><br>
 Tech Talents</a>
</h1>

<p align="center">
 <a href="#Descrição">Descrição</a> •
 <a href="#Tecnologias">Tech Talents</a> •
 <a href="#instalacao">Instalação e Uso</a> •
 <a href="#estrutura">Estrutura do Projeto</a> •
 <a href="#autor">Autor</a>
</p>

---

<br>

<h1 align="center">  
  <p align="center">
  <img width="800" height="300" src="public/login.gif"><br><br>
</p>

</h1>

<a id="Descrição"></a>
### Descrição

O projeto consiste em um e-commerce responsivo focando na acessibilidade e SEO. Nele é possível adicionar itens ao carrinho, escolher a quantidade de cada item, retirar itens e limpar o carrinho.

A aplicação foi desenvolvida com as tecnologias **React Js** e **Typescript** no frontend e **Node JS**, **Typescript** e **Express** no backend (<a href="https://github.com/RenCsar/TECH-shopping-api" target="_blank">veja o repositório do backend clicando aqui</a>). 

Sobre as tecnologias utilizadas: as rotas da aplicação foram feitas com o **React Router Dom**, a estilização feita com **Styled Components** e **Material UI**, o gerenciamento de estado foi feito com **Redux** (Toolkit), as requisições foram feitas com **Redux Thunk** e **Axios** e para sinalizar ao usuário possíveis erros da aplicação foi utilizado foi utilizado a biblioteca **toastify**.

<a id="Tecnologias"></a>
### Tecnologias utilizadas

As seguintes ferramentas foram usadas na construção do projeto:

- [React JS](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/)
- [Styled Components](https://styled-components.com/)
- [Redux toolkit](https://redux-toolkit.js.org/)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [Material UI](https://mui.com/material-ui/getting-started/overview/)

---

<a id="instalacao"></a>
## Pré-requisitos

- Node.js (versão ^18.16)
- npm (versão ^8.12.2)

## Configuração do Ambiente

1. Clone o repositório:

   ```shell
   git clone https://github.com/RenCsar/login.git
   ```

2. Instale as dependências:

   ```shell
   npm install
   ```

## Rodando o Projeto

1. Inicie o servidor de desenvolvimento:

   ```shell
   npm start
   ```

   O servidor será iniciado em http://localhost:3000.

<a id="estrutura"></a>
## Estrutura do Projeto

Explicação da estrutura de pastas do projeto:

```
src/
  components/       # Componentes reutilizáveis
  pages/            # Páginas principais do projeto
  services/         # Integrações com APIs externas
  styles/           # Estilos globais
  utils/            # Funções utilitárias
  App.tsx           # Componente principal
  index.tsx         # Ponto de entrada da aplicação
```

### Autor

Made with 💜 by Renan Cesar 👋

[![LinkedIn Badge](https://img.shields.io/badge/-Renan_Cesar-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/renan-cesar/)](https://www.linkedin.com/in/renan-cesar/)
