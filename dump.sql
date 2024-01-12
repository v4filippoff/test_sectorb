-- MySQL dump 10.13  Distrib 8.2.0, for Linux (x86_64)
--
-- Host: localhost    Database: users_app
-- ------------------------------------------------------
-- Server version	8.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(60) NOT NULL,
  `gender` enum('male','female') DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'test',NULL,'hello1@gmail.com','$2b$10$X33tX00fxzThI6Qraoc39uDr9J9bbfPlTvUbt0AdDBF/trsBO.MWe',NULL,'uho-1705072768210.jpeg','2024-01-12 15:17:37'),(2,'test',NULL,'hello2@gmail.com','$2b$10$OOr5L1R5DZ88xcMAV3JfH.uueKEP4k3OA9HGGW/HmyY1BcLBf3dLe',NULL,NULL,'2024-01-12 15:17:41'),(3,'test',NULL,'hello3@gmail.com','$2b$10$7Uz6aDNIuG/0ie6VdFDrQehZ5Ex.Dp51X.wGlVlIqyTbWWwBF11Ja',NULL,NULL,'2024-01-12 15:17:44'),(4,'test',NULL,'hello4@gmail.com','$2b$10$J9iDXOl9GyI6ocgPzvd0LOovpi9gdzdOqSNF59wXS4NYE5u.Q9tiS',NULL,NULL,'2024-01-12 15:17:46'),(5,'test',NULL,'hello5@gmail.com','$2b$10$dd.L8zY7AXIJe5.Gd7OuPOHsXXCZC3RCKetnAtskNUblfm6m8UR1O',NULL,NULL,'2024-01-12 15:17:49'),(6,'test',NULL,'hello6@gmail.com','$2b$10$wY4UDXQoipautKjG.df4g.FbDqOOn3R2clFJ0UwXwnWJf0zLWtRFy',NULL,NULL,'2024-01-12 15:17:52'),(7,'test',NULL,'hello7@gmail.com','$2b$10$yiGGsw9nTpLVrMDU6hktRO6hsuUq14yZYagq3KMCDVt.1PoGIbK9a',NULL,NULL,'2024-01-12 15:17:54'),(8,'test',NULL,'hello8@gmail.com','$2b$10$D.7Fpcl4u.EsaP73iyWk4emrru6atjfX8X4UDNf32F.T8UEMHBRu.',NULL,NULL,'2024-01-12 15:17:57'),(9,'test',NULL,'hello9@gmail.com','$2b$10$Xy9iLoT3RRnGb.2TDbvvg.M1Vt1EP9e2GMSCpCHn4hqwVJWn2RIS2',NULL,NULL,'2024-01-12 15:18:00'),(10,'test',NULL,'hello10@gmail.com','$2b$10$uY7JI1iG7n4b4ePZQrU9veIJp2aD10Q6.4F5aPY/D5wP8.vnMUc4i',NULL,NULL,'2024-01-12 15:18:03'),(11,'test',NULL,'hello11@gmail.com','$2b$10$5DbuCiE.YhXQAOkXhiQuSuYgtiWQQFL0hsZfxmE4qcyC/ikEw6KC6',NULL,NULL,'2024-01-12 15:18:06'),(12,'test',NULL,'hello12@gmail.com','$2b$10$2/iO8MI.u06HNUipjnaNbOWEGz6CVcwdUhR0ddeWEfiXQuabvWGmu',NULL,NULL,'2024-01-12 15:18:15');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-12 15:21:14
