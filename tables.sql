DROP TABLE IF EXISTS `ranks`;
CREATE TABLE `ranks` (
    `rank_id` int NOT NULL auto_increment,
    `rank_name` char(100),
    `rank_type` char(100),
    `latitude` decimal(42,10),
    `longitude` decimal(42,10),
    PRIMARY KEY(rank_id));


DROP TABLE IF EXISTS `routes`;
CREATE TABLE `routes` (
    `route_id` int NOT NULL auto_increment,
    `rank_id` int(42),
    `route_name` char(100),
    `destination_id` char(100),
    `price` decimal(42,2),
    PRIMARY KEY(route_id),
    FOREIGN KEY (rank_id) REFERENCES ranks(rank_id)
);
