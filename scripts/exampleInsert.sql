-- Inserir os dias
INSERT INTO dias (identificador, nome_dia) VALUES (1, 'Segunda');
INSERT INTO dias (identificador, nome_dia) VALUES (2, 'Terça');
INSERT INTO dias (identificador, nome_dia) VALUES (3, 'Quarta');
INSERT INTO dias (identificador, nome_dia) VALUES (4, 'Quinta');
INSERT INTO dias (identificador, nome_dia) VALUES (5, 'Sexta');
INSERT INTO dias (identificador, nome_dia) VALUES (6, 'Sábado');
INSERT INTO dias (identificador, nome_dia) VALUES (7, 'Domingo');

-- Inserir uma pessoa
INSERT INTO pessoas (identificador, nome_usuario, email_usuario, senha_hash)
VALUES (1, 'Maria Oliveira', 'maria@example.com', 'senhaSegura123');

-- Inserir um grupo "Saúde"
INSERT INTO grupos (identificador, nome_grupo)
VALUES (1, 'Saúde');

-- Inserir uma atividade associada à pessoa e ao grupo
INSERT INTO atividades (identificador, titulo, detalhes, grupo_id, situacao, data_reset, pessoa_id)
VALUES (1, 'Caminhada matinal', 'Caminhar 30 minutos pela manhã', 1, 'pendente', '2025-05-09', 1);

-- Associar essa atividade à segunda-feira
INSERT INTO atividades_dias (identificador, atividade_id, dia_id)
VALUES (1, 1, 1);
