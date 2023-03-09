INSERT INTO ROLE(ID, NAME)
VALUES (1, 'Gestor de vacaciones'),
(2, 'Programador');
--
--INSERT INTO _USER(ID, PASSWORD, EMAIL, ROLE_ID)
--VALUES(1, 'pass123', 'mauricio.zarate', 2),
--(2, 'pass123', 'juana.ramirez', 1);
--
INSERT INTO REQUEST(ID, TITLE, COMMENT, FINISH_DATE, START_DATE, HOURS)
VALUES
(1, 'Solicitud uno', 'Comentario 1', '2023-01-01', '2023-01-15',0),
(2, 'Solicitud dos', 'Comentario 2', '2023-02-01', '2023-02-20',0),
(3, 'Solicitud tres', 'Comentario 3', '2023-02-01', '2023-02-20',0),
(4, 'Solicitud cuatro', 'Comentario 4', '2023-02-01', '2023-02-20',0),
(5, 'Solicitud cinco', 'Comentario 5', '2023-02-01', '2023-02-20',0);
