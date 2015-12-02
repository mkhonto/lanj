-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 02, 2015 at 05:17 PM
-- Server version: 5.5.46-0ubuntu0.14.04.2
-- PHP Version: 5.5.9-1ubuntu4.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `getmethere_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `rank`
--

CREATE TABLE IF NOT EXISTS `rank` (
  `rank_id` int(11) NOT NULL AUTO_INCREMENT,
  `rank_name` char(100) DEFAULT NULL,
  `rank_type` char(100) DEFAULT NULL,
  `latitude` decimal(42,10) DEFAULT NULL,
  `longitude` decimal(42,10) DEFAULT NULL,
  PRIMARY KEY (`rank_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `rank`
--

INSERT INTO `rank` (`rank_id`, `rank_name`, `rank_type`, `latitude`, `longitude`) VALUES
(1, 'Cape Town', 'official', 3.1457890000, 70.9856210000),
(2, 'Bellville', 'official', 10.1457800000, -20.1447600000),
(3, 'Khayelitsha', 'official', 10.2546980000, 40.2365800000);

-- --------------------------------------------------------

--
-- Table structure for table `route`
--

CREATE TABLE IF NOT EXISTS `route` (
  `route_id` int(11) NOT NULL AUTO_INCREMENT,
  `rank_id` int(42) DEFAULT NULL,
  `route_name` char(100) DEFAULT NULL,
  `price` decimal(42,2) DEFAULT NULL,
  `destination_id` int(11) NOT NULL,
  PRIMARY KEY (`route_id`),
  KEY `rank_id` (`rank_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `route`
--

INSERT INTO `route` (`route_id`, `rank_id`, `route_name`, `price`, `destination_id`) VALUES
(1, 2, 'Bellville N2 Cape Town CBD', 16.50, 1),
(3, 2, 'Bellville - Khayelitsha', 13.00, 3);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `route`
--
ALTER TABLE `route`
  ADD CONSTRAINT `route_ibfk_1` FOREIGN KEY (`rank_id`) REFERENCES `rank` (`rank_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
