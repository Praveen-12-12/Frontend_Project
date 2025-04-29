create database feproject;
use feproject;
create table login(sno int auto_increment primary key, name varchar(30), password varchar(30));
select * from login;
insert into login values(1, 'praveen','12345');