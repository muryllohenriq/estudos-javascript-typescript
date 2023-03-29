ALTER TABLE endereco ADD CONSTRAINT id_fk_estudante
foreign key(estudante_id) REFERENCES estudantes(estudante_id);

ALTER TABLE matricula ADD CONSTRAINT matricula_curso
foreign key(curso_id) REFERENCES cursos(curso_id);

ALTER TABLE matricula ADD CONSTRAINT matricula_aluno
foreign key(estudante_id) REFERENCES estudantes(estudante_id);
