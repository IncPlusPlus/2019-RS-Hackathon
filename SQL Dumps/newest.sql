CREATE DATABASE  IF NOT EXISTS `homeinfo` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;
USE `homeinfo`;
-- MySQL dump 10.13  Distrib 8.0.15, for Win64 (x86_64)
--
-- Host: localhost    Database: homeinfo
-- ------------------------------------------------------
-- Server version	8.0.15

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `home`
--

DROP TABLE IF EXISTS `home`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `home` (
  `HomeID` mediumint(11) NOT NULL,
  `HousingType` varchar(10) DEFAULT NULL,
  `StreetAddress` text NOT NULL,
  `City` text NOT NULL,
  `State` varchar(2) DEFAULT NULL,
  `ZipCode` text NOT NULL,
  `SqFt` text,
  `Accessibility` tinyint(1) DEFAULT NULL,
  `NumOfOccupancy` int(11) DEFAULT NULL,
  `NumOfBedrooms` int(11) DEFAULT NULL,
  `AvgBedroomSqFt` int(11) DEFAULT NULL,
  `WindowInBedroom` tinyint(1) DEFAULT NULL,
  `NumOfKitchen` int(11) DEFAULT NULL,
  `NumOfBathroom` int(11) DEFAULT NULL,
  `HasShower` tinyint(1) DEFAULT NULL,
  `NumOfLivingRoom` int(11) DEFAULT NULL,
  `NumOfAdditionalRooms` int(11) DEFAULT NULL,
  `HouseNumberLegible` tinyint(1) DEFAULT NULL,
  `NumberOfExits` int(11) DEFAULT NULL,
  `HandrailsOnStairs` tinyint(1) DEFAULT NULL,
  `HasTrashBarrels` tinyint(1) DEFAULT NULL,
  `Rating` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`HomeID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `home`
--

LOCK TABLES `home` WRITE;
/*!40000 ALTER TABLE `home` DISABLE KEYS */;
INSERT INTO `home` VALUES (7549763,'House','sha','sha','AL','99999','100',0,2,1,1,0,1,1,0,1,1,0,1,0,0,4);
/*!40000 ALTER TABLE `home` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-04-14  9:45:26
