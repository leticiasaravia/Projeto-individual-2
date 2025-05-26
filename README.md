# Web Application Document - Projeto Individual - Módulo 2 - Inteli

**_Os trechos em itálico servem apenas como guia para o preenchimento da seção. Por esse motivo, não devem fazer parte da documentação final._**

## Nome do Projeto

Personal Organizer

#### Autor do projeto

Letícia Fernandes do Espírito Santo Saravia

## Sumário

1. [Introdução](#c1)  
2. [Visão Geral da Aplicação Web](#c2)  
3. [Projeto Técnico da Aplicação Web](#c3)  
4. [Desenvolvimento da Aplicação Web](#c4)  
5. [Referências](#c5)  

<br>

## <a name="c1"></a>1. Introdução (Semana 01)

Trata-se de um site desenvolvido com o objetivo de facilitar a organização do dia a dia universitário. A plataforma permite ao usuário adicionar e editar tarefas com uma interface intuitiva e acessível, pensada para tornar o usuário mais produtivo. Os dados são integrados pelo próprio estudante.

---

## <a name="c2"></a>2. Visão Geral da Aplicação Web

### 2.1. Personas (Semana 01)

<div align="center">
    <strong style="font-size: 18px;"><sub>Persona</sub></strong><br>
<img src="img/amandabatista.png" width="60%"
    alt="Persona"><br>

### 2.2. User Stories (Semana 01)


US01
Como estudante de Direito, quero receber lembretes de início, meio e fim de uma atividade, para que eu consiga administrar melhor o meu tempo e não me perder nas tarefas.

US02
Como usuária que busca produtividade, quero visualizar todas as minhas atividades em um calendário intuitivo, para que eu compreenda facilmente meus compromissos e prioridades.

US03 (com análise INVEST)
Como usuária que tem dificuldade em definir prioridades, quero que as tarefas sejam automaticamente classificadas por nível de importância, para que eu saiba em qual atividade focar primeiro.

Análise INVEST de US03:

Independente: Pode ser implementada de forma isolada sem depender de outra funcionalidade.

Negociável: A maneira de classificação manual pelo usuário pode ser adaptada conforme necessidade.

Valiosa: Ajuda Amanda a superar sua maior dor, que é não conseguir definir prioridades, aumentando sua produtividade.

Estimável: A tarefa é de complexidade moderada, possível de estimar para planejamento de sprints.

Pequena: Pode ser dividida em partes menores (ex: definição de critérios de prioridade, exibição no app, etc.).

Testável: É possível testar verificando se as tarefas aparecem ordenadas conforme os critérios definidos.
---

---

## <a name="c3"></a>3. Projeto da Aplicação Web

### 3.1. Modelagem do banco de dados  (Semana 3)


Modelo relacional
 ```sql
--  -- Tabela de Alunos
CREATE TABLE alunos (
  id SERIAL PRIMARY KEY,
  nome VARCHAR NOT NULL,
  email VARCHAR NOT NULL UNIQUE,
  senha VARCHAR NOT NULL
);

-- Tabela de Categorias
CREATE TABLE categorias (
  id SERIAL PRIMARY KEY,
  nome VARCHAR NOT NULL
);

-- Tabela de Prioridade
CREATE TABLE prioridade (
  id SERIAL PRIMARY KEY,
  prioridade VARCHAR NOT NULL
);

-- Tabela de Status
CREATE TABLE status (
  id SERIAL PRIMARY KEY,
  status VARCHAR NOT NULL
);

-- Tabela de Tarefas
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  aluno_id INT REFERENCES alunos(id) ON DELETE CASCADE,
  categorias_id INT REFERENCES categorias(id) ON DELETE SET NULL,
  titulo VARCHAR NOT NULL,
  descricao VARCHAR,
  data_inicio VARCHAR,
  data_fim VARCHAR,
  prioridade_id INT REFERENCES prioridade(id),
  status_id INT REFERENCES status(id)
);
```````


![DER](../assets/der.png)

### 3.1.1 BD e Models (Semana 5)
A aplicação utiliza PostgreSQL, hospedado no Supabase. Os Models são representados pelas tabelas criadas no banco de dados. Como não foi utilizado um ORM, os Models são manipulados diretamente nos controllers com comandos SQL via pg.

Exemplos:

Model tasks: gerencia tarefas do usuário.

Model alunos: representa os usuários cadastrados.

Models auxiliares: status, prioridade, categorias.

### 3.2. Arquitetura (Semana 5)

A arquitetura segue o padrão MVC (Model-View-Controller):

Model: Camada que representa os dados (estruturas no banco, como tasks, alunos, etc.).

View: Representada por interfaces como o calendário e os alertas modais.

Controller: Onde a lógica de negócio é tratada. Recebe requisições, processa e interage com o banco.

Fluxo:
Usuário → View (interface) → Controller (função) → Model (SQL) → Controller → View (resposta)

### 3.3. Wireframes (Semana 03)

![WIREFRAME](wireframe.png)

Wireframe 1 – Visualização semanal e detalhes da tarefa
Este wireframe mostra uma visualização em formato de calendário semanal, acompanhado de um painel com os detalhes da tarefa selecionada. Nesse painel, o usuário pode visualizar ou preencher informações como: nome da tarefa, horários de início e fim, descrição e prioridade.

Relacionamento com as User Stories:

US02 - "Como usuária que busca produtividade, quero visualizar todas as minhas atividades em um calendário intuitivo..."
O calendário semanal permite que a usuária veja de forma clara e organizada como suas atividades estão distribuídas ao longo dos dias. Isso facilita a compreensão dos compromissos, contribuindo para uma rotina mais estruturada e produtiva.

US03 - "Como usuária que tem dificuldade em definir prioridades, quero que as tarefas sejam automaticamente classificadas por nível de importância..."
A presença do campo "Prioridade" no painel de tarefa mostra que há uma funcionalidade voltada à categorização das atividades por importância. Essa informação pode ser usada tanto para exibição quanto para ordenação automática das tarefas, o que atende diretamente à necessidade descrita na user story.

Wireframe 2 – Alerta de fim de tarefa
Este wireframe apresenta a mesma estrutura do anterior, mas com um modal sobreposto no centro da tela. O modal exibe uma mensagem informando que o tempo da atividade foi concluído, além de sugerir que a usuária inicie uma nova tarefa.

Relacionamento com a User Story:

US01 - "Como estudante de Direito, quero receber lembretes de início, meio e fim de uma atividade..."
A notificação exibida no modal funciona como um lembrete visual, alertando a usuária de que o tempo para a conclusão da tarefa terminou. Isso demonstra que o sistema está acompanhando o tempo das atividades e notificando a usuária nos momentos apropriados, conforme proposto na user story.

### 3.4. Guia de estilos (Semana 05)

*Descreva aqui orientações gerais para o leitor sobre como utilizar os componentes do guia de estilos de sua solução.*


### 3.5. Protótipo de alta fidelidade (Semana 05)

*Posicione aqui algumas imagens demonstrativas de seu protótipo de alta fidelidade e o link para acesso ao protótipo completo (mantenha o link sempre público para visualização).*

### 3.6. WebAPI e endpoints (Semana 05)

A aplicação possui uma Web API RESTful com os seguintes endpoints:

Usuários
GET /api/usuarios — Lista todos os usuários

GET /api/usuarios/:id — Busca um usuário por ID

POST /api/usuarios — Cria um novo usuário

PUT /api/usuarios/:id — Atualiza dados de um usuário

DELETE /api/usuarios/:id — Remove um usuário

Tarefas
GET /api/tarefas — Lista todas as tarefas

POST /api/tarefas — Cria uma nova tarefa

PUT /api/tarefas/:id — Atualiza uma tarefa existente

DELETE /api/tarefas/:id — Remove uma tarefa

### 3.7 Interface e Navegação (Semana 07)

*Descreva e ilustre aqui o desenvolvimento do frontend do sistema web, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar.*

---

## <a name="c4"></a>4. Desenvolvimento da Aplicação Web (Semana 8)

### 4.1 Demonstração do Sistema Web (Semana 8)

*VIDEO: Insira o link do vídeo demonstrativo nesta seção*
*Descreva e ilustre aqui o desenvolvimento do sistema web completo, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar.*

### 4.2 Conclusões e Trabalhos Futuros (Semana 8)

*Indique pontos fortes e pontos a melhorar de maneira geral.*
*Relacione também quaisquer outras ideias que você tenha para melhorias futuras.*



## <a name="c5"></a>5. Referências

_Incluir as principais referências de seu projeto, para que seu parceiro possa consultar caso ele se interessar em aprofundar. Um exemplo de referência de livro e de site:_<br>