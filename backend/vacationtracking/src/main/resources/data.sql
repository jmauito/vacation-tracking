INSERT INTO ROLE(ID, NAME)
VALUES (1, 'ROLE_ADMIN'),
(2, 'ROLE_USER');
--
INSERT INTO _USER(ID, PASSWORD, EMAIL, ROLE_ID)
VALUES(100, '$2a$10$iOp5PLISgwL.xxdvQFl14uT506s8bYXR4B./3QU6teIkFRno3bUjq', 'nick.fury@mail.com', 1),
(200, '$2a$10$629nhy94B86rW16/KdJOoet.f3XnAPC8CmKxyLjWPXt8eXHwFvaui', 'natasha.romanoff@mail.com', 2);
--
INSERT INTO REQUEST_TYPE(ID, NAME)
VALUES(1, 'Tiempo anual de vacaciones'),
(2, 'Solicitar licencia con cargo a vacaciones');

--
INSERT INTO REQUEST(ID, TITLE, COMMENT, FINISH_DATE, START_DATE, HOURS)
VALUES
(100, 'Solicitud uno', 'Comentario 1', '2023-01-01', '2023-01-15',0),
(101, 'Solicitud dos', 'Comentario 2', '2023-02-01', '2023-02-20',0),
(102, 'Solicitud tres', 'Comentario 3', '2023-02-01', '2023-02-20',0),
(103, 'Solicitud cuatro', 'Comentario 4', '2023-02-01', '2023-02-20',0),
(104, 'Solicitud cinco', 'Comentario 5', '2023-02-01', '2023-02-20',0);
