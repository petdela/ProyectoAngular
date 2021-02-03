drop database base_pag;
create database if not exists BASE_PAG;
use  BASE_PAG;

create table if not exists Rol(
Id_rol int,
Nombre varchar(100),
Descripcion varchar(100),
primary key(id_rol));

create table if not exists Usuarios(
fechaC timestamp default current_timestamp,
Correo varchar(50),
Nombres varchar(100),
Apellidos varchar(100),
Contrasena varchar(40),
Rol int,
primary key(Correo),
foreign key(Rol) references Rol(Id_rol));

create table if not exists Administrador(
Correo_ad varchar(50),
Id_administrador int,
ContrasenaCorr varchar(40),
primary key(Id_administrador),
foreign key(Correo_ad) references Usuarios(Correo));


create table if not exists Cliente(
Correo_cl varchar(50),
Id_cliente int auto_increment,
Foto blob,
primary key(Id_cliente),
foreign key(Correo_cl) references Usuarios(Correo));

create table if not exists Mail(
Id_correo int auto_increment,
Asunto varchar(100),
Remitente int,
Contenido JSON,
primary key(Id_correo),
foreign key(Remitente) references Administrador(Id_administrador));

create table if not exists Suscriptors(
Id_suscriptor int auto_increment,
DireccionCorreoE varchar(50),
fechaSus timestamp default current_timestamp,
primary key(Id_suscriptor));

create table if not exists MailSuscriptor(
Id_correoM int,
Suscriptor int,
fechaEnv timestamp default current_timestamp,
primary key(Id_correoM, suscriptor),
foreign key(Id_correoM) references Mail(Id_correo),
foreign key(Suscriptor) references Suscriptors(Id_suscriptor));

create table if not exists Resenas(
Estado varchar(2) default "a",
Id_resena int auto_increment,
Contenido JSON,
Usuario_res int,
primary key(Id_resena),
foreign key(Usuario_res) references Cliente(Id_cliente));

create table if not exists Modificacion(
Id_modificacion int auto_increment,
Nombre_mod varchar(50),
primary key(Id_modificacion));

create table if not exists LogResena(
Id_modresena int auto_increment,
Fecha timestamp default current_timestamp,
Resena int,
Modificacion int,
primary key(Id_modresena),
foreign key(Resena) references Resenas(Id_resena),
foreign key(Modificacion) references Modificacion(Id_modificacion));

create table if not exists Servicios(
Estado varchar(2) default "a",
MiniDes varchar (100),
Titulo varchar(100),
Codigo int,
Contenido JSON,
primary key(Codigo));

create table if not exists LogModificacion(
Id_modificacion int auto_increment,
Fecha timestamp default current_timestamp,
Servicio int,
Modificacion int,
Usuario int,
primary key(Id_modificacion),
foreign key(Servicio) references Servicios(codigo),
foreign key(Modificacion) references Modificacion(Id_modificacion),
foreign key(Usuario) references Administrador(Id_administrador));

create table if not exists Visita(
Id_visita int auto_increment,
fecha_De date,
fecha_Hasta date,
num_visitas int,
primary key(Id_visita));

create table if not exists Web(
Id_consulta int auto_increment,
Usuario int,
Reporte int,
primary key(Id_consulta),
foreign key(Usuario) references Administrador(Id_Administrador),
foreign key(Reporte) references Visita(Id_Visita));

create table if not exists Contactos(
id_contacto int auto_increment,
Correo varchar(100),
Telefono varchar(100),
Direccion varchar(100),
Usuario int,
primary key(Id_contacto),
foreign key(Usuario) references Administrador(Id_administrador));

INSERT into Rol 
(Id_rol, Nombre, Descripcion) values
(1,"Administrador","Encargado de la gestion del contenido de la pagina web"), (2,"Cliente","Usuario registrado en la pagina web");

INSERT into Usuarios
(Correo, Nombres, Apellidos, Contrasena, Rol) values
("petterdelacruz99@outlook.com","Dino","Mendoza",MD5("contra"),1), ("example@outlook.com","Cliente1","Apellido1",MD5("abc"),2),
("example2@outlook.com","Cliente2","Apellido2",MD5("abcd"),2), ("example3@outlook.com","Cliente3","Apellido3",MD5("abcde"),2), 
("example4@outlook.com","Cliente4","Apellido4",MD5("abcdef"),2);

INSERT into Administrador
(Correo_ad, Id_administrador, ContrasenaCorr) values
("petterdelacruz99@outlook.com",1,"noEslaRealxd");

INSERT into Cliente
(Correo_cl) values
("example@outlook.com"),("example2@outlook.com"),("example3@outlook.com"),("example4@outlook.com");

INSERT into Mail
(Asunto) values ("Prueba");

INSERT into Suscriptors
(DireccionCorreoE) values ("example23@outlook.com"), ("example24@outlook.com");

INSERT into MailSuscriptor
(Id_correoM, Suscriptor) values (1,1), (1,2);

INSERT into Resenas
(Usuario_res) values (1), (2), (3), (4);

INSERT into Modificacion
(Nombre_mod) values ("Cambio contenido"), ("Cambio titulo");

INSERT into LogResena
(Resena,Modificacion) values (1,1), (2,2), (1,2),(2,1);

INSERT into Servicios
(Codigo,Titulo,MiniDes) values (1, "Auditoria Interna","Control y la vigilancia interna de una empresa o institución."),
 (2, "Diseño Politicas","Diseño e implementación de reglamentos y procedimientos de control interno."), 
 (3,"Consultoria","Asesoramiento en cuestiones técnicas de una empresa en sus diversas áreas."),
 (4,"Negociaciones","Reestructuración de Pasivos. Procesos de Fusión y Escisión.");

INSERT into LogModificacion
(Servicio,Modificacion, Usuario) values (1,1, 1);

INSERT into Visita
(fecha_DE,fecha_Hasta,num_visitas) values ("2021-02-01","2021-02-28", 30);

INSERT into Web
(Usuario,Reporte) values (1,1);

INSERT into Contactos
(Correo,Telefono,Direccion,Usuario) values ("cpadinomendozac@gmail.com","+593 0992931213","Colón 561 y Boyacá Edif. Pegar Piso 2 Of 203
Guayas, Guayaquil, Ecuador",1);
