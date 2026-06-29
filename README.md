````md
# TechStock

Tech Stock é um **sistema Full Stack**, desenvolvido para uma empresa fictícia: **Tech Stock LTDA**.

Foi desenvolvido com o objetivo de fornecer uma solução moderna para controle e gerenciamento de estoque, permitindo o cadastro, consulta, atualização e remoção de produtos, além de autenticação segura de usuários através de JWT.

Desenvolvido utilizando ASP.NET Core Web API, Entity Framework Core, SQL Server e Next.js. O sistema foi construído seguindo conceitos de arquitetura em camadas (Repository Pattern), separando responsabilidades entre Controllers, Services, Interfaces, Repositories e Contexts, facilitando manutenção, escalabilidade e reutilização de código.


## Tecnologias Utilizadas

### Backend

- C#
- ASP.NET Core Web API
- Entity Framework Core
- SQL Server
- JWT Authentication
- Swagger/OpenAPI
- Repository Pattern
- Dependency Injection

### Frontend

- Next.js
- React
- TypeScript
- CSS Modules
- Axios
- React Toastify

### Ferramentas

- Git
- GitHub
- Figma
- Visual Studio 2022
- Visual Studio Code
## Estrutura do Projeto

#### Backend
├── Database
│   ├── CREATE // Script de criação do banco de dados
│   └── INSERT // Script de inserção inicial dos dados

├── TechStockAPI
│   ├── Applications
│   │   ├── Authentication // Configuração e geração do Bearer Token JWT
│   │   ├── Conversions    // Conversões e mapeamentos da API
│   │   └── Services       // Regras de negócio e respostas dos endpoints
│   ├── Contexts           // Contexto do banco de dados (Entity Framework)
│   ├── Controllers        // Endpoints da API
│   ├── DTOs               // Objetos de transferência de dados
│   ├── Domains            // Entidades do domínio da aplicação
│   ├── Exceptions         // Tratamento de exceções customizadas
│   ├── Interfaces         // Contratos e assinaturas dos métodos
│   └── Repositories       // Camada de acesso aos dados
````

#### Frontend

```ts
├── public
│   └── Imagens da aplicação

└── src
    ├── api         // Serviços de comunicação com a API
    ├── components  // Componentes reutilizáveis da aplicação
    ├── pages       // Páginas da aplicação
    ├── styles      // Estilos globais da aplicação
    └── utils       // Funções utilitárias, conversões e configuração de notificações
```



```md
## Funcionalidades do Projeto

* Autenticação e login de usuários
* Geração de Token JWT
* Controle de cargos por autenticação
* Proteção de rotas
* Gestão de estoque
* Cadastro de produtos
* Listagem de produtos
* Atualização de informações
* Exclusão de registros
* Controle de categorias
* Cadastro de usuários
* Gerenciamento de informações
* Controle de permissões


## Banco de Dados

O projeto utiliza SQL Server como banco de dados relacional e Entity Framework Core para mapeamento objeto-relacional (ORM).

```` 

### Configuração da Connection String

No arquivo `appsettings.json`:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=SEU_SERVIDOR;Database=TechStock;Trusted_Connection=True;"
  }
}
```

## Como Executar o Projeto

### Após clonar o repositório

```bash
git clone https://github.com/seu-usuario/TechStock.git
```

### Backend

1. Acesse a pasta da API:

```bash
cd TechStock.API
```

2. Restaure os pacotes:

```bash
dotnet restore
```

3. Crie o arquivo `.env` utilizando o arquivo `.env.example` como referência.

4. Inicie a aplicação com o comando:

```bash
dotnet run
```

#### A API ficará disponível em:

```text
https://localhost:7062
```

#### Swagger

```text
https://localhost:7062/swagger
```

### Frontend

1. Acesse a pasta do frontend:

```bash
cd techstock-web
```

2. Instale as dependências:

```bash
npm install
```

3. Execute a aplicação:

```bash
npm run dev
```

#### A aplicação ficará disponível em:

```text
http://localhost:3000
```

## Endpoints Principais

|   Método   | Endpoint             | Descrição         |
| :--------: | :------------------- | :---------------- |
|  **POST**  | `/api/auth/login`    | Realizar login    |
|   **GET**  | `/api/produtos`      | Listar produtos   |
|   **GET**  | `/api/produtos/{id}` | Buscar produto    |
|  **POST**  | `/api/produtos`      | Cadastrar produto |
|   **PUT**  | `/api/produtos/{id}` | Atualizar produto |
| **DELETE** | `/api/produtos/{id}` | Remover produto   |


```md
## Boas Práticas Aplicadas

* Arquitetura em camadas
* Separação de responsabilidades
* Injeção de Dependência
* Repository Pattern
* DTOs para transferência de dados
* Autenticação JWT
* Tratamento de exceções
* Tipagem forte com TypeScript


## Aprendizados

Durante o desenvolvimento deste projeto foram aplicados conceitos fundamentais de desenvolvimento Full Stack, incluindo:

* Construção de APIs REST
* Segurança com JWT
* Integração entre Frontend e Backend
* Manipulação de banco de dados relacional
* Entity Framework Core
* Componentização com React e Next.js
* Consumo de APIs utilizando Axios


## Desenvolvedor

**Kauê Sérgio Campos**
Desenvolvedor Full Stack com foco em:

* C#
* ASP.NET Core
* SQL Server
* TypeScript
* React
* Next.js


GitHub: https://github.com/KaueCMP
````


   ``` cs
    acabou = true;
    string fim = acabou == true ? "Obrigado pela atenção!" : "É o fim!";
    Console.WriteLine(fim);
```
