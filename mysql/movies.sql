use movies;

select * from movie;

INSERT INTO language VALUES (null, 'BR', 'Português(Brasil)');

INSERT INTO production_company VALUES (null, 'Lereby Produções');

INSERT INTO movie VALUES (null, 'O Auto da Compadecidade', null, null, 'As aventuras de João Grilo e chicó', 2.157166, 20000915, 11496994, 157, 'Released',
null, null, null);

UPDATE language SET language_name = 'Desconhecido' WHERE language_id = 24701;

SELECT * FROM movies where person = 'lee';

