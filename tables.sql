DROP TABLE IF EXISTS `ranks`;
CREATE TABLE `ranks` (
    `rank_id` int NOT NULL auto_increment,
    `rank_name` char(100),
    `rank_type` char(100),
    `latitude` decimal(42,2222222222),
    `longitude` decimal(42,222222222),
    PRIMARY KEY(rank_id),
    CONSTRAINT uc_rank_name  UNIQUE (rank_name)
);


DROP TABLE IF EXISTS `routes`;
CREATE TABLE `Products` (
    `route_id` int NOT NULL auto_increment,
    `rank_id` int(42),
    `route_name` char(100),
    `destination` char(100),
    `price` decimal(42,2),
    PRIMARY KEY(route_id),
    FOREIGN KEY (rank_id) REFERENCES ranks(rank_id),
);
