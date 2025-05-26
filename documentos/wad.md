Documento de Aplicação Web – Projeto Individual – Módulo 2 – Inteli
Título do Projeto
Organizador Pessoal Universitário

Responsável pelo Projeto
Letícia Fernandes do Espírito Santo Saravia

Índice
Apresentação

Conceito Geral da Solução

Estrutura Técnica da Plataforma

Construção da Plataforma Web

Fontes de Pesquisa

<a name="apresentacao"></a>1. Apresentação
Este projeto propõe uma solução digital voltada à rotina acadêmica de estudantes universitários, com foco em gestão de tempo e produtividade. A aplicação permite ao usuário inserir, modificar e acompanhar suas atividades por meio de uma interface clara e acessível. A proposta é promover autonomia organizacional, com controle total por parte do estudante.

<a name="conceito"></a>2. Conceito Geral da Solução
2.1. Perfil do Usuário
<center> <img src="img/amandabatista.png" width="60%" alt="Perfil da Persona"> </center>
2.2. Histórias do Usuário
US01: Enquanto estudante de Direito, desejo receber alertas em diferentes momentos da tarefa (início, meio e fim), de modo que eu consiga distribuir melhor meu tempo e não esquecer das obrigações.

US02: Como uma usuária focada em produtividade, gostaria de visualizar minhas tarefas distribuídas em um calendário prático e fácil de entender, para assim organizar minhas prioridades.

US03: Para lidar melhor com a definição do que fazer primeiro, quero que o sistema identifique automaticamente o grau de prioridade de cada tarefa, facilitando meu foco.

Análise da US03 com a metodologia INVEST:

I - Independente: A funcionalidade pode ser desenvolvida de forma isolada.

N - Negociável: O método de classificação pode ser alterado conforme novas demandas.

V - Valiosa: Ajuda o usuário a organizar melhor a agenda diária.

E - Estimável: A funcionalidade possui complexidade gerenciável.

S - Small (Pequena): É possível quebrá-la em partes menores.

T - Testável: Pode ser validada com testes de ordenação de tarefas.

<a name="estrutura"></a>3. Estrutura Técnica da Plataforma
3.1. Banco de Dados
O sistema utiliza banco de dados relacional PostgreSQL, hospedado no Supabase. Abaixo, a estrutura proposta:

sql
Copiar
Editar
CREATE TABLE estudantes (
  id SERIAL PRIMARY KEY,
  nome VARCHAR NOT NULL,
  email VARCHAR NOT NULL UNIQUE,
  senha VARCHAR NOT NULL
);

CREATE TABLE categorias (
  id SERIAL PRIMARY KEY,
  nome VARCHAR NOT NULL
);

CREATE TABLE niveis_prioridade (
  id SERIAL PRIMARY KEY,
  descricao VARCHAR NOT NULL
);

CREATE TABLE status_tarefa (
  id SERIAL PRIMARY KEY,
  estado VARCHAR NOT NULL
);

CREATE TABLE tarefas (
  id SERIAL PRIMARY KEY,
  estudante_id INT REFERENCES estudantes(id) ON DELETE CASCADE,
  categoria_id INT REFERENCES categorias(id),
  titulo VARCHAR NOT NULL,
  descricao TEXT,
  inicio VARCHAR,
  fim VARCHAR,
  prioridade_id INT REFERENCES niveis_prioridade(id),
  status_id INT REFERENCES status_tarefa(id)
);
3.1.1. Models
A lógica de dados é gerenciada diretamente via SQL, sem ORM. As tabelas funcionam como modelos do sistema:

tarefas: controle das atividades dos usuários

estudantes: cadastro dos usuários

categorias, prioridade, status: tabelas auxiliares

3.2. Arquitetura do Sistema
Utiliza-se o padrão MVC (Model-View-Controller):

Model: Estrutura do banco de dados.

View: Interface do usuário (calendário, notificações, formulários).

Controller: Manipula dados, aplica regras de negócio e responde à interface.

Fluxo da aplicação:

Usuário → Interface (View) → Controlador (Controller) → Banco (Model) → Controller → View

3.3. Protótipos de Baixa Fidelidade
Wireframe 1: Visão semanal + Detalhes da tarefa
Calendário exibindo os dias da semana com painel lateral para preenchimento e visualização dos dados da tarefa. Elementos como nome, horários e prioridade são exibidos.

US02: Entrega uma visualização clara e eficiente das atividades da semana.

US03: Campo de prioridade evidencia suporte à classificação automática.

Wireframe 2: Alerta de conclusão
Modal exibido ao final da execução de uma tarefa, com aviso de término e sugestão de nova atividade.

US01: Implementação de lembretes visuais com temporizador.

3.4. Guia de Estilo
Inserir diretrizes de uso visual: cores, tipografia, espaçamentos, componentes etc.

3.5. Protótipo Final
Imagens e link de acesso ao protótipo de alta fidelidade.

3.6. API REST
A API da aplicação segue o padrão REST com os seguintes recursos:

Usuários:

GET /api/usuarios

GET /api/usuarios/:id

POST /api/usuarios

PUT /api/usuarios/:id

DELETE /api/usuarios/:id

Tarefas:

GET /api/tarefas

POST /api/tarefas

PUT /api/tarefas/:id

DELETE /api/tarefas/:id

3.7. Frontend e Navegação
Inserir prints e explicações sobre a interface desenvolvida e os principais pontos de navegação.


## <a name="c4"></a>4. Desenvolvimento da Aplicação Web (Semana 8)

### 4.1 Demonstração do Sistema Web (Semana 8)

*VIDEO: Insira o link do vídeo demonstrativo nesta seção*
*Descreva e ilustre aqui o desenvolvimento do sistema web completo, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar.*

### 4.2 Conclusões e Trabalhos Futuros (Semana 8)

*Indique pontos fortes e pontos a melhorar de maneira geral.*
*Relacione também quaisquer outras ideias que você tenha para melhorias futuras.*



## <a name="c5"></a>5. Referências

_Incluir as principais referências de seu projeto, para que seu parceiro possa consultar caso ele se interessar em aprofundar. Um exemplo de referência de livro e de site:_<br>

