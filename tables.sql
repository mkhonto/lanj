--
-- Table structure for table `rank`
--

drop table if exists rank;
CREATE TABLE IF NOT EXISTS `rank` (
  `rank_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` char(100) DEFAULT NULL,
  `type` char(100) DEFAULT NULL,
  `latitude` decimal(42,10) DEFAULT NULL,
  `longitude` decimal(42,10) DEFAULT NULL,
  `opening_time` varchar(100) NOT NULL,
  `closing_time` varchar(100) NOT NULL,
  PRIMARY KEY (`rank_id`)
)

--
-- Dumping data for table `rank`
--

INSERT INTO `rank` (`rank_id`, `name`, `type`, `latitude`, `longitude`, `opening_time`, `closing_time`) VALUES
(1, 'Cape Town', 'official', -33.9222350000, 18.4264440000, '04 AM', '23 PM'),
(2, 'Bellville', 'official', -33.9058290000, 18.6302960000, '04 AM', '21 PM'),
(3, 'Khayelitsha', 'official', -34.0161550000, 18.6493420000, '04 AM', '21 PM'),
(4, 'Gugulethu', 'official', -33.9818910000, 18.5661780000, '04 AM', '22 PM'),
(5, 'Maitland', 'official', -33.9249840000, 18.4790910000, '06 AM', '21 PM'),
(6, 'Obsevatory', 'official', -33.9400520000, 18.4639100000, '06 AM', '21 PM'),
(7, 'V&A Waterfront', 'un-official', -33.9050730000, 18.4178760000, '05 AM', '20 PM'),
(8, 'Brackenfell', 'Unofficial', -33.8813010000, 18.7088460000, '08 AM', '22 PM'),
(9, 'Nyanga', 'Official', -33.9923680000, 18.5833170000, '04 AM', '23 PM'),
(10, 'Langa', 'Official', -33.9456470000, 18.5366780000, '04 AM', '23 PM'),
(11, 'Delft South', 'official', -33.9917910000, 18.6306800000, '06 AM', '21 PM');

-- --------------------------------------------------------

--
-- Table structure for table `route`
--

drop table if exists;
CREATE TABLE IF NOT EXISTS `route` (
  `route_id` int(11) NOT NULL AUTO_INCREMENT,
  `rank_id` int(42) DEFAULT NULL,
  `route_name` char(100) DEFAULT NULL,
  `price` decimal(42,2) DEFAULT NULL,
  `destination_id` int(11) NOT NULL,
  PRIMARY KEY (`route_id`),
  KEY `rank_id` (`rank_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

--
-- Dumping data for table `route`
--

INSERT INTO `route` (`route_id`, `rank_id`, `route_name`, `price`, `destination_id`) VALUES
(1, 2, 'Bellville N2 Cape Town CBD', 16.50, 1),
(3, 2, 'Bellville - Khayelitsha', 13.00, 3),
(4, 7, 'Waterfront - Cape Town CBD', 5.00, 1),
(5, 1, 'Cape Town - Observatory', 7.00, 6),
(6, 1, 'Cape Town - Khayelitsha (all sites)', 16.50, 3),
(7, 1, 'Cape Town - Gugulethu', 12.00, 4),
(8, 1, 'Cape Town - Maitland', 8.50, 5),
(9, 5, 'Maitland -Observatory', 5.00, 6),
(10, 6, 'Observatory - Maitland', 5.00, 5),
(11, 3, 'Khayelitsha - Gugulethu', 13.00, 4),
(12, 4, 'Gugulethu - Khayelitsha', 13.00, 3);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `route`
--
ALTER TABLE `route`
  ADD CONSTRAINT `route_ibfk_1` FOREIGN KEY (`rank_id`) REFERENCES `rank` (`rank_id`);
