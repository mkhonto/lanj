DROP TABLE IF EXISTS `rank`;
CREATE TABLE `rank` (
    `id` int NOT NULL auto_increment,
    `rank_name` char(100),
    `rank_type` char(100),
    `latitude` decimal(10,7),
    `longitude` decimal(10,7),
    PRIMARY KEY(id),
    CONSTRAINT uc_rank_name  UNIQUE (rank_name)
);

INSERT INTO "rank" ("rank_id", "rank_name", "rank_type", "latitude", "longitude") VALUES
(1, 'Cape Town', 'official', 3.1457890000, 70.9856210000),
(2, 'Bellville', 'official', 10.1457800000, -20.1447600000),
(3, 'Khayelitsha', 'official', 10.2546980000, 40.2365800000);



DROP TABLE IF EXISTS `route`;
CREATE TABLE `route` (
    `id` int NOT NULL auto_increment,
    `rank_id` int(42),
    `destination_id` int(42),
    `price` decimal(42,2),
    PRIMARY KEY(id),
    FOREIGN KEY (rank_id) REFERENCES ranks(id),
    FOREIGN KEY (destination_id)  REFERENCES ranks(id)
);


INSERT INTO "route" ("route_id", "rank_id", "route_name", "price", "destination_id") VALUES
(1, 2, 'Bellville N2 Cape Town CBD', 16.50, 1),
(3, 2, 'Bellville - Khayelitsha', 13.00, 3);

ALTER TABLE "route"
  ADD CONSTRAINT "route_ibfk_1" FOREIGN KEY ("rank_id") REFERENCES "rank" ("rank_id");

