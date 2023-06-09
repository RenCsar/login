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
  <img width="800" height="400" src="public/login.gif"><br><br>
</p>

</h1>

<a id="Descrição"></a>
### Descrição

Este é um pequeno projeto desenvolvido com a Stack MERN (React.js, TypeScript, Node.js, Express e MongoDB). O objetivo principal é implementar um sistema de login seguro, onde os usuários podem autenticar-se através de tokens gerados pelo JSON Web Tokens (JWT).

A aplicação possui validação para rotas privadas, permitindo o acesso somente à página inicial (home) se um token válido estiver presente. Da mesma forma, se um usuário já estiver logado e tentar acessar a página de login, só será redirecionado para a página de login se realizar o processo de logout e invalidar o token.

O formulário de login foi desenvolvido utilizando o React Hook Form para gerenciamento de estado e validação. As validações de e-mail e senha são realizadas com o auxílio da biblioteca Yup, garantindo a correta formatação dos campos e disparando alertas quando campos obrigatórios, como e-mail ou senha, não são preenchidos. Para exibir mensagens de erro, utiliza-se o componente Toasty do Material UI. Além disso, o sistema é capaz de exibir mensagens de erro vindas do back-end, como quando o usuário não existe, a senha está incorreta ou ocorre um erro no servidor, por exemplo.

Este repositório contém o front-end da aplicação. O back-end pode ser encontrado [Aqui](https://github.com/RenCsar/API-login)!

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
- [React Hook Form](https://www.react-hook-form.com/)
- [Yup](https://github.com/jquense/yup)

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
