create database loja_carro;
use loja_carro;
create table carros (
id int auto_increment primary key,
titulo varchar(100),
preco decimal(9, 2),
descricao text,
marca varchar(50),
modelo varchar(50),
kilometragem int,
data_conpra date,
cambio varchar(20)
);

insert into carros(titulo,preco,descricao,marca,modelo,kilometragem,data_conpra,cambio) values
('vendo celta', 12000.00,'carro em bom estado de conservacão','chevrolet','celta', 190000, 2013/12/12,'manual');

insert into carros(titulo,preco,descricao,marca,modelo,kilometragem,data_conpra,cambio) values
('vendo gol', 12000.00,'carro em bom estado de conservacão','volkswagem','gol', 190000, '2013-12-12','manual');

select * from carros;