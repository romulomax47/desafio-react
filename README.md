# DESAFIO REACT JS 

[inspiração](https://github.com/devMozao/desafio-reactjs)

## Objetivo do desafio
Construir uma aplicação web em ReactJS que busque o perfil de desenvolvedores na API pública do GitHub e exibir os seus dados em uma página de perfil.

## Histórias
•	Ao entrar na home page, devo pesquisar o usuário pelo seu username do GitHub e ter os dados do usuário exibidos corretamente na página de perfil.  

•	Na página de perfil, os repositórios devem ser ordenados com o seguinte critério: dos que tem mais estrelas, para os que tem menos estrelas.  

•	Os nomes dos repositórios devem ser links que levam ao repositório original do GitHub, em uma página nova.  

•	Caso o usuário pesquisado possua um site nas informações de seu perfil, o mesmo deve ser aberto em uma nova página. O mesmo deve acontecer caso o usuário pesquisado tenha uma conta no twitter em seu perfil.  

•	O botão de voltar deve levar de volta para a home page, para que outro usuário do GitHub seja pesquisado.

## Referências
•	API de busca de usuários do GitHub: https://api.github.com/users/username

•	API de busca de repositórios do usuário pesquisado: https://api.github.com/users/username/repos

•	Documentação oficial do GitHub: https://docs.github.com/en/rest

## Observações
Não é necessário se preocupar com CORS ou implementar um backend para fazer as requisições. A API do Github permite chamadas diretas do navegador.

## Run

1° faça um clone do repositorio

````
$ git clone https://github.com/romulomax47/desafio-react.git

````
2° Entre no repositorio

````
$ cd desafio-react

````
3° Instalar as dependencies e rode o projeto

````
$ npm install
$ npm run dev

````
## 🛠 Stack

- React.js
- React-router-dom
- Axios
- Tailwindcss

