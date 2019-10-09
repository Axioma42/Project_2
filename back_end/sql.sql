DROP TABLE orders;
DROP TABLE stores

CREATE TABLE orders (
folio INT PRIMARY KEY,
id_tipo TEXT,
Estatus TEXT,
ID_Tienda INT,
Nombre_tienda TEXT,
Region TEXT,
Estado TEXT,
Ciudad TEXT,
Fin_de_cap DATE,
Fecha_entr DATE, 
Hora_entr INT,
Dia_sem TEXT,
mes INT,
Venta_Neta FLOAT, 
CP INT,
latitude FLOAT,
longitude FLOAT,
Con_Serv TEXT
);

CREATE TABLE stores (
id_tienda INT PRIMARY KEY,
nombre_tienda TEXT,
region TEXT, 
estado TEXT, 
ciudad TEXT, 
municipio TEXT,
proto TEXT,
long FLOAT, 
lat FLOAT, 
con_serv TEXT
);

SELECT * from orders;
SELECT * from stores;