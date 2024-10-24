-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 24, 2024 at 05:08 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `usuariosdb`
--
CREATE DATABASE IF NOT EXISTS `usuariosdb` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `usuariosdb`;

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE `usuario` (
  `usuario_id` int(10) NOT NULL,
  `usuario_nombre` varchar(40) NOT NULL,
  `usuario_apellido` varchar(40) NOT NULL,
  `usuario_usuario` varchar(20) NOT NULL,
  `usuario_clave` varchar(200) NOT NULL,
  `usuario_email` varchar(70) NOT NULL,
  `usuario_admin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`usuario_id`, `usuario_nombre`, `usuario_apellido`, `usuario_usuario`, `usuario_clave`, `usuario_email`, `usuario_admin`) VALUES
(1, 'Aleix', 'Busquets', 'Reflecte', '$2a$12$/QRHqvBvtgTGoMX28HxcNOAHz7Q9iaZRJ4Dzk8aA6mAWaDj.1vPOi', 'aleix19196@gmail.com', 1),
(29, 'Salva', 'Busquets', 'Salva', '671fdf003f669d5d2ca6ab67de793f34c39d17fca43b938817fd43d049aba7dd7d1468ab148a13bf922f82e544f2619beda284dc943318681c32b74b0b3ac313', 'salva@gmail.com', 1),
(30, 'clauclau', 'clauclau', 'clauclau', 'fb4a0b509ea2ed514474491c46319fc5170c4555f9fa18843b753e0ed98eef6cb9a8845697a3ee605559b0cc0006ab8d275a869509dad8b487b20a43fa97e3b9', 'clauclau@gmail.com', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`usuario_id`),
  ADD UNIQUE KEY `usuario_email` (`usuario_email`),
  ADD UNIQUE KEY `usuario_usuario` (`usuario_usuario`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `usuario_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
