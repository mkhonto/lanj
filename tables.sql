DROP DATABASE IF EXISTS `getmethere`;
CREATE DATABASE getmethere;

USE `getmethere`;

DROP TABLE IF EXISTS `rank`;
CREATE TABLE `rank` (
    `id` int NOT NULL auto_increment,
    `rank_name` char(100),
    `rank_type` char(100),
    `latitude` decimal(10,7),
    `longitude` decimal(10,7),
    PRIMARY KEY(id)
    
);


DROP TABLE IF EXISTS `route`;
CREATE TABLE `route` (
    `id` int NOT NULL auto_increment,
    `rank_id` int(42),
    `destination_id` int(42),
    `price` decimal(42,2),
    PRIMARY KEY(id),
    FOREIGN KEY (rank_id) REFERENCES rank(id),
    FOREIGN KEY (destination_id)  REFERENCES rank(id)
);

INSERT INTO rank(rank_name, rank_type, latitude, longitude) VALUES('Cape Town Station', 'Official', -33.924706, 18.422787);
INSERT INTO rank(rank_name, rank_type, latitude, longitude) VALUES('Mithchells Plain Station', 'Official', -34.0145819, 18.3871117);
INSERT INTO rank(rank_name, rank_type, latitude, longitude) VALUES('Khayelitsha', 'Official', -34.0131259, 18.3857373);
INSERT INTO rank(rank_name, rank_type, latitude, longitude) VALUES('Bellville Station', 'Official', -33.8850214, 18.5570999);

INSERT INTO route(rank_id, destination_id, price) VALUES(1, 3, 12);
INSERT INTO route(rank_id, destination_id, price) VALUES(2, 1, 12);
INSERT INTO route(rank_id, destination_id, price) VALUES(3, 1, 15);
INSERT INTO route(rank_id, destination_id, price) VALUES(4, 1, 13);