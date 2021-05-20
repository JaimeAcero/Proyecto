CREATE TABLE Listas(
idListas INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(500) NOT NULL,
cantidad INTEGER NOT NULL
);

CREATE TABLE Item(
idItem INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
titulo VARCHAR(100) NOT NULL,
contenido VARCHAR(500) NOT NULL,
portada VARCHAR(500) NOT NULL,
tipo VARCHAR(100) NOT NULL,
trailer VARCHAR(500) NOT NULL,
año INTEGER NOT NULL
);

CREATE TABLE Enlaces(
idEnlaces INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
URL VARCHAR(500) NOT NULL,
fkItem INTEGER NOT NULL,
CONSTRAINT FOREIGN KEY (fkItem) REFERENCES Item(idItem)
);

CREATE TABLE Usuario(
idUsuario INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
nickname VARCHAR(100) NOT NULL,
contrasenia VARCHAR(100) NOT NULL,
estatus VARCHAR(100) NOT NULL,
fkListas INTEGER NOT NULL,
CONSTRAINT FOREIGN KEY (fkListas) REFERENCES Listas(idListas)
);

CREATE TABLE Comentarios(
idComentarios INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
cuerpo VARCHAR(500) NOT NULL,
fecha DATE NOT NULL,
puntuacion INTEGER NOT NULL,
fkUsuario INTEGER NOT NULL,
CONSTRAINT FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario)
);

CREATE TABLE ListasItem(
idListasItem INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
fkListas INTEGER NOT NULL,
fkItem INTEGER NOT NULL,
CONSTRAINT FOREIGN KEY (fkListas) REFERENCES Listas(idListas),
CONSTRAINT FOREIGN KEY (fkItem) REFERENCES Item(idItem)
);
INSERT INTO item(titulo,contenido,portada,tipo,trailer,año)VALUES("Shingeki no kyojin","Muchos años atrás, la humanidad estuvo al borde de la extinción con la aparición de unas criaturas gigantes que devoraban a todas las personas. Huyendo, la humanidad consiguió sobrevivir en una ciudad fortificada de altas murallas que se ha convertido en el último reducto de la civilización contra los Titanes que campan a sus anchas por el mundo. Ahora esa paz está a punto de verse interrumpida por una cadena de acontecimientos que llevará a desvelar qué son los Titanes y cómo aparecieron","https://i.imgur.com/f6Djwi5.jpg","serie","https://www.youtube.com/watch?v=FRn6xXXF-7s","2013,%Y");
INSERT INTO item(titulo,contenido,portada,tipo,trailer,año)VALUES("WandaVision","Tres semanas después del final de Avengers: Endgame (2019),4​ Wanda Maximoff y Visión están viviendo una vida de ensueño en las afueras, en la pequeña ciudad de Westview (Nueva Jersey), mientras tratan de ocultar sus poderes. Pero a medida que pasan por nuevas décadas y cambian de escenarios televisivos, la pareja empieza a sospechar que algo no va bien.","https://i.imgur.com/jlsDljS.jpg","serie","https://www.youtube.com/watch?v=sj9J2ecsSpo","2021,%Y");
INSERT INTO item(titulo,contenido,portada,tipo,trailer,año)VALUES("The Boys","The Boys está ambientada en un universo en el que los individuos superpoderosos son reconocidos como héroes por el público en general y trabajan para la poderosa corporación Vought International, que los comercializa y monetiza. Fuera de sus personajes heroicos, la mayoría son arrogantes y corruptos. La serie se centra principalmente en dos grupos: los Siete, el principal equipo de superhéroes de Vought International, y The Boys, los titulares, vigilantes que buscan derribar a Vought y a los superhéroes corruptos.","https://i.imgur.com/8ew8NDy.jpg","serie","https://www.youtube.com/watch?v=eshJeoaDmtY","2019,%Y");
INSERT INTO item(titulo,contenido,portada,tipo,trailer,año)VALUES("Invencible","Mark Grayson es un adolescente normal, excepto por el hecho de que su padre, Nolan, es el superhéroe más fuerte del planeta. Poco después de su decimoséptimo cumpleaños, Mark comienza a desarrollar sus propios poderes y entra en la tutela de su padre. A medida que Mark utiliza sus poderes para el bien, descubre que el legado de su padre puede no ser tan heroico como parece.","https://i.imgur.com/sCsz4Yd.png","serie","https://www.youtube.com/watch?v=ROCIksHW2oc","2021,%Y");
INSERT INTO item(titulo,contenido,portada,tipo,trailer,año)VALUES("Jujutsu kaisen","Dificultades, arrepentimiento, vergüenza… Los sentimientos negativos de los humanos se convierten en Maldiciones que nos acechan en nuestra vida diaria. Las Maldiciones campan a sus anchas por todo el mundo, y pueden llevar a las personas a sufrir terribles desgracias e incluso dirigirlas a su muerte. Y lo que es peor: solo una Maldición puede exorcizar otra Maldición.","https://i.imgur.com/TqlkEou.jpg","serie","https://www.youtube.com/watch?v=pkKu9hLT-t8","2020,%Y");
INSERT INTO item(titulo,contenido,portada,tipo,trailer,año)VALUES("Peaky blinders","1919. Inglaterra. Thomas Shelby lidera una conocida banda de Birmingham que avanza con ferocidad por el bajo mundo.","https://i.imgur.com/xQuTcOW.jpg","serie","https://www.youtube.com/watch?v=H282c9q2MUU","2013,%Y");
INSERT INTO item(titulo,contenido,portada,tipo,trailer,año)VALUES("Extracurricular","La doble vida de un estudiante modelo que acaba de sumergirse en el mundo del crimen da un giro cuando una compañera de clase se interesa en su secreto.","https://i.imgur.com/yaaOPhi.jpg","serie","https://www.youtube.com/watch?v=cdjQak1Roc0","2020,%Y");
INSERT INTO item(titulo,contenido,portada,tipo,trailer,año)VALUES("locke & key","Tras el asesinato de su padre, tres hermanos se mudan con su madre al hogar donde él creció: una mansión repleta de llaves mágicas que guardan poderes y secretos.","https://i.imgur.com/2QvqAgi.jpg","serie","https://www.youtube.com/watch?v=iSzi100tz5M","2020,%Y");
INSERT INTO item(titulo,contenido,portada,tipo,trailer,año)VALUES("The killing","Los detectives de homicidios Sarah Linden y Stephen Holder se involucran más de lo debido en todos los crímenes que intentan resolver en esta serie aclamada por la crítica.","https://i.imgur.com/XcXgjzP.jpg","serie","https://www.youtube.com/watch?v=OkbfvPeH3G0&t=25s","2011,%Y");
INSERT INTO item(titulo,contenido,portada,tipo,trailer,año)VALUES("Bojack Horseman","Conoce al caballo más querido de los noventa, pero 20 años después. Un cascarrabias con un corazón no precisamente de oro, ¿quizás de cobre?","https://i.imgur.com/lJVwPyj.jpg","serie","https://www.youtube.com/watch?v=zpTZg9AHxnw","2014,%Y");
INSERT INTO item(titulo,contenido,portada,tipo,trailer,año)VALUES("Hilda","La valiente Hilda deja el bosque encantado para ir a la ciudad y encuentra nuevos amigos, aventuras y criaturas mágicas.","https://i.imgur.com/2HEAqI4.jpg","serie","https://www.youtube.com/watch?v=oawTkOjbDQw","2018,%Y");
 SELECT * FROM  base.item;
 
 
 alter table item drop column año;
DELETE FROM item
WHERE idItem>0 and idItem<100;
ALTER TABLE item AUTO_INCREMENT = 1;

