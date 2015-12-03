DROP TABLE IF EXISTS `ranks`;
CREATE TABLE `rank` (
    `id` int NOT NULL auto_increment,
    `rank_name` char(100),
    `rank_type` char(100),
    `latitude` decimal(10,7),
    `longitude` decimal(10,7),
    PRIMARY KEY(id),
    CONSTRAINT uc_rank_name  UNIQUE (rank_name)
);


DROP TABLE IF EXISTS `routes`;
CREATE TABLE `route` (
    `id` int NOT NULL auto_increment,
    `rank_id` int(42),
    `destination_id` int(42),
    `price` decimal(42,2),
    PRIMARY KEY(id),
    FOREIGN KEY (rank_id) REFERENCES ranks(id),
    FOREIGN KEY (destination_id)  REFERENCES ranks(id)
);