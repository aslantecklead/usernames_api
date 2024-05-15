CREATE DATABASE IF NOT EXISTS `NamesList`;
USE `NamesList`;

CREATE TABLE IF NOT EXISTS `Usernames` (
  `ID_Name` int(11) NOT NULL AUTO_INCREMENT,
  `Username` varchar(50) NOT NULL,
  `RegisteredAt` datetime NOT NULL,
  PRIMARY KEY (`ID_Name`),
  UNIQUE KEY `Username` (`Username`)
);

INSERT IGNORE INTO `Usernames` (`Username`, `RegisteredAt`) VALUES
('Иван Иванов', '2023-03-15 10:30:00');

SELECT * FROM `Usernames`;
