create database if not exist repertories;

create table canciones (
    id serial,
    titulo varchar(50),
    artista varchar(50),
    tono varchar(10)
);
 