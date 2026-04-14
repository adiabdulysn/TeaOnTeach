-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: eticketing
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `category_id` tinyint unsigned NOT NULL AUTO_INCREMENT,
  `category_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `color` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`category_id`),
  UNIQUE KEY `categories_unique` (`category_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `divisions`
--

DROP TABLE IF EXISTS `divisions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `divisions` (
  `division_id` tinyint unsigned NOT NULL AUTO_INCREMENT,
  `division_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`division_id`),
  UNIQUE KEY `divisions_unique` (`division_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `divisions`
--

LOCK TABLES `divisions` WRITE;
/*!40000 ALTER TABLE `divisions` DISABLE KEYS */;
/*!40000 ALTER TABLE `divisions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `role_id` tinyint unsigned NOT NULL AUTO_INCREMENT,
  `role_name` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `permissions` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`role_id`),
  UNIQUE KEY `roles_unique` (`role_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ticket_documents`
--

DROP TABLE IF EXISTS `ticket_documents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ticket_documents` (
  `ticket_document_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `ticket_id` bigint unsigned NOT NULL,
  `file_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_path` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_size` int DEFAULT NULL,
  `file_extension` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`ticket_document_id`),
  UNIQUE KEY `ticket_documents_unique` (`file_name`),
  KEY `ticket_documents_tickets_FK` (`ticket_id`),
  CONSTRAINT `ticket_documents_tickets_FK` FOREIGN KEY (`ticket_id`) REFERENCES `tickets` (`ticket_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket_documents`
--

LOCK TABLES `ticket_documents` WRITE;
/*!40000 ALTER TABLE `ticket_documents` DISABLE KEYS */;
/*!40000 ALTER TABLE `ticket_documents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ticket_priorities`
--

DROP TABLE IF EXISTS `ticket_priorities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ticket_priorities` (
  `ticket_priority_id` tinyint unsigned NOT NULL AUTO_INCREMENT,
  `ticket_priority_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `color` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_default` tinyint(1) DEFAULT '0',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`ticket_priority_id`),
  UNIQUE KEY `ticket_priorities_unique` (`ticket_priority_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket_priorities`
--

LOCK TABLES `ticket_priorities` WRITE;
/*!40000 ALTER TABLE `ticket_priorities` DISABLE KEYS */;
/*!40000 ALTER TABLE `ticket_priorities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ticket_reply_documents`
--

DROP TABLE IF EXISTS `ticket_reply_documents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ticket_reply_documents` (
  `ticket_reply_document_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `ticket_id` bigint unsigned NOT NULL,
  `file_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_path` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_size` int DEFAULT NULL,
  `file_extension` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`ticket_reply_document_id`),
  UNIQUE KEY `ticket_reply_documents_unique` (`file_name`),
  KEY `ticket_reply_documents_tickets_FK` (`ticket_id`),
  CONSTRAINT `ticket_reply_documents_tickets_FK` FOREIGN KEY (`ticket_id`) REFERENCES `tickets` (`ticket_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket_reply_documents`
--

LOCK TABLES `ticket_reply_documents` WRITE;
/*!40000 ALTER TABLE `ticket_reply_documents` DISABLE KEYS */;
/*!40000 ALTER TABLE `ticket_reply_documents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ticket_replys`
--

DROP TABLE IF EXISTS `ticket_replys`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ticket_replys` (
  `ticket_reply_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `ticket_id` bigint unsigned NOT NULL,
  `ticket_status_id` tinyint unsigned NOT NULL,
  `pic_user_id` bigint unsigned NOT NULL,
  `ticket_attch` enum('Y','N') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'N',
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`ticket_reply_id`),
  KEY `ticket_replys_users_FK` (`pic_user_id`),
  KEY `ticket_replys_tickets_FK` (`ticket_id`),
  KEY `ticket_replys_ticket_statuses_FK` (`ticket_status_id`),
  CONSTRAINT `ticket_replys_tickets_FK` FOREIGN KEY (`ticket_id`) REFERENCES `tickets` (`ticket_id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `ticket_replys_users_FK` FOREIGN KEY (`pic_user_id`) REFERENCES `users` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `ticket_replys_ticket_statuses_FK` FOREIGN KEY (`ticket_status_id`) REFERENCES `ticket_statuses` (`ticket_status_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket_replys`
--

LOCK TABLES `ticket_replys` WRITE;
/*!40000 ALTER TABLE `ticket_replys` DISABLE KEYS */;
/*!40000 ALTER TABLE `ticket_replys` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ticket_statuses`
--

DROP TABLE IF EXISTS `ticket_statuses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ticket_statuses` (
  `ticket_status_id` tinyint unsigned NOT NULL AUTO_INCREMENT,
  `ticket_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `color` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '#cecece',
  `is_default` tinyint(1) NOT NULL DEFAULT '0',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`ticket_status_id`),
  UNIQUE KEY `ticket_statuses_unique` (`ticket_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket_statuses`
--

LOCK TABLES `ticket_statuses` WRITE;
/*!40000 ALTER TABLE `ticket_statuses` DISABLE KEYS */;
/*!40000 ALTER TABLE `ticket_statuses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tickets`
--

DROP TABLE IF EXISTS `tickets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tickets` (
  `ticket_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `ticket_number` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ticket_subject` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ticket_detail` longtext COLLATE utf8mb4_unicode_ci,
  `requestor_name` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `ticket_type_id` tinyint unsigned NOT NULL,
  `category_id` tinyint unsigned NOT NULL,
  `division_id` tinyint unsigned NOT NULL,
  `ticket_priority_id` tinyint unsigned NOT NULL,
  `ticket_status_id` tinyint unsigned NOT NULL,
  `ticket_attach` enum('Y','N') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'N',
  `ticket_start_date` datetime DEFAULT NULL,
  `ticket_end_date` datetime DEFAULT NULL,
  `created_user_id` bigint unsigned NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_user_id` bigint unsigned DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`ticket_id`),
  UNIQUE KEY `tickets_unique` (`ticket_number`),
  KEY `tickets_ticket_types_FK` (`ticket_type_id`),
  KEY `tickets_categories_FK` (`category_id`),
  KEY `tickets_divisions_FK` (`division_id`),
  KEY `tickets_ticket_priorities_FK` (`ticket_priority_id`),
  KEY `tickets_ticket_statuses_FK` (`ticket_status_id`),
  KEY `tickets_created_users_FK` (`created_user_id`),
  KEY `tickets_updated_users_FK` (`updated_user_id`),
  CONSTRAINT `tickets_categories_FK` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `tickets_divisions_FK` FOREIGN KEY (`division_id`) REFERENCES `divisions` (`division_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `tickets_ticket_priorities_FK` FOREIGN KEY (`ticket_priority_id`) REFERENCES `ticket_priorities` (`ticket_priority_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `tickets_ticket_statuses_FK` FOREIGN KEY (`ticket_status_id`) REFERENCES `ticket_statuses` (`ticket_status_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `tickets_ticket_types_FK` FOREIGN KEY (`ticket_type_id`) REFERENCES `ticket_types` (`ticket_type_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `tickets_users_created_FK` FOREIGN KEY (`created_user_id`) REFERENCES `users` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `tickets_users_updated_FK` FOREIGN KEY (`updated_user_id`) REFERENCES `users` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tickets`
--

LOCK TABLES `tickets` WRITE;
/*!40000 ALTER TABLE `tickets` DISABLE KEYS */;
/*!40000 ALTER TABLE `tickets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ticket_types`
--

DROP TABLE IF EXISTS `ticket_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ticket_types` (
  `ticket_type_id` tinyint unsigned NOT NULL AUTO_INCREMENT,
  `ticket_type_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`ticket_type_id`),
  UNIQUE KEY `ticket_types_unique` (`ticket_type_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket_types`
--

LOCK TABLES `ticket_types` WRITE;
/*!40000 ALTER TABLE `ticket_types` DISABLE KEYS */;
/*!40000 ALTER TABLE `ticket_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_name` varchar(80) COLLATE utf8mb4_unicode_ci NOT NULL,
  `full_name` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `role_id` tinyint unsigned NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `verify_token` text COLLATE utf8mb4_unicode_ci,
  `login_at` datetime DEFAULT NULL,
  `logout_at` datetime DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `users_unique` (`user_name`),
  KEY `users_roles_FK` (`role_id`),
  CONSTRAINT `users_roles_FK` FOREIGN KEY (`role_id`) REFERENCES `roles` (`role_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'eticketing'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-04-13 10:37:05
