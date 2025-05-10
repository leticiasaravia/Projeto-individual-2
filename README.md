# Projeto-individual-2

# Gerenciador de Tarefas Universitário

## Descrição do sistema

Este projeto é um gerenciador de tarefas desenvolvido para ajudar estudantes universitários a se organizarem melhor no dia a dia. O sistema permite cadastrar, editar e visualizar tarefas, que podem ser classificadas por categoria, prioridade e status.

Foi desenvolvido com Node.js e Express.js, seguindo o padrão de organização MVC (Model - View - Controller).

## Estrutura do projeto

O projeto está organizado da seguinte forma:
````meu-projeto/
├── config/ # Configurações, como a conexão com o banco de dados
├── controllers/ # Lógica de controle das rotas
├── models/ # Modelos de dados (estruturas das tabelas)
├── routes/ # Arquivos de definição das rotas
├── services/ # Serviços auxiliares
├── views/ # Arquivos EJS com as páginas do sistema
├── assets/ # Imagens e fontes
├── scripts/ # Arquivos JS públicos
├── styles/ # Arquivos CSS
├── tests/ # Testes automatizados
├── .env.example # Exemplo de variáveis de ambiente
├── .gitignore # Arquivos ignorados pelo Git
├── jest.config.js # Configuração de testes
├── package.json # Lista de dependências
├── server.js # Arquivo principal que inicializa o servidor
└── readme.md # Documentação do projeto
````
Como executar o projeto localmente:

1. Clone este repositório:
 ````
   git clone https://github.com/leticiasaravia/projeto-individual-2
````
2. Instale as dependências:
   ```
   npm install
   ```

3. Configure o banco de dados PostgreSQL:
   - Crie um banco.
   - Execute o script `modelo-fisico.sql` para criar as tabelas.

4. Inicie o servidor:
   ```bash
   node server.js
   ```

5. Acesse o sistema pelo navegador:
   ```
   http://localhost:3000
   ```

