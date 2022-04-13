<h1 align="center">Bem vindo ao JASON's Food Back-end 👋</h1>
<p align="center">
 <img src="./public/images/jasonfoods.png" width="340" alt="Nest Logo" />
</p>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="https://globo-back-end.herokuapp.com/api" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: UNLICENSED" src="https://img.shields.io/badge/License-UNLICENSED-yellow.svg" />
  </a>
</p>

> Repositório destinado a armazenar a o back-end do Jasons food.

## Instalação do Projeto

Antes de executar o projeto é necessário ter instalado:

- ### Obrigatório
  - [Node (melhor utilizar a versão LTS)](https://nodejs.org/en/download/)
  - [PostgresSql (pode usar docker se quiser)](https://www.postgresql.org/)
  - NPM (se você instalar o node, o npm já vem junto)
- ### Opcionais
  - [Docker](https://www.docker.com/products/docker-desktop)
  - [Yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable)
  - [VSCode](https://code.visualstudio.com/Download)

Após instalar os itens acima, é necessário instalar as dependências do projeto. Para isso, rodar no terminal na pasta do projeto:

```sh
# Utilizando yarn
yarn

# Utilizando npm
npm install
```

## Configurando credenciais do banco

Antes de executar o projeto será necessario você renomear o arquivo `.env.template` para `.env` e alterar com as informações que condizem do seu banco de dados.

## Rodando o projeto

```bash
# Utilizando yarn
yarn start:dev

# Utilizando npm
npm run start:dev
```

## Executar as Migrations

As migrations da aplicação estão localizadas em [src/shared/infra/migrations](./src/shared/infra/migrations). Para utilizar as migrations é necessários apenas 2 comandos, um para gerar uma nova migration e outro para executar todas as migrations:

```bash
# Gerando migration com yarn
yarn migration:create NomeDaMigration

# Gerando migration com npm
npm run migration:create NomeDaMigration

# Rodando as migrations com yarn
yarn typeorm migration:run

# Rodando as migrations com npm
npm run typeorm migration:run
```

## Ambientes

- Prod => https://globo-back-end.herokuapp.com/

## Documentações

### Swagger

- Para acessar o Swagger da API é necessário que o servidor esteja rodando e basta acessar [https://globo-back-end.herokuapp.com/api](https://globo-back-end.herokuapp.com/api).

---

## Autores

#### 👤 [João Paulo](https://github.com/paulomarquess)

#### 👤 [Marianna Veras](https://github.com/verasmarianna)

#### 👤 [Samuel Santos](https://github.com/samuelLimaSantos)

#### 👤 [Tais Araujo](https://github.com/taisjjorge)
