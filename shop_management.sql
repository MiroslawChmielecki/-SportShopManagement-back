-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 14 Lip 2022, 10:17
-- Wersja serwera: 10.4.17-MariaDB
-- Wersja PHP: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `shop_management`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `admin`
--

CREATE TABLE `admin` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `adminName` tinytext COLLATE utf8mb4_unicode_ci NOT NULL,
  `adminPassword` tinytext COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Zrzut danych tabeli `admin`
--

INSERT INTO `admin` (`id`, `adminName`, `adminPassword`) VALUES
('nh5c8178-6def-4e66-9dde-b82dccbad45d', 'Miro', '$2b$10$p/DTuvdMzPAcEuyEKDgUtuAdjw4amWrNJ3R6Il5h3VxYe1amR1c2e');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `products`
--

CREATE TABLE `products` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `description` varchar(3000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` decimal(8,2) NOT NULL,
  `category` tinytext COLLATE utf8mb4_unicode_ci NOT NULL,
  `dateAdded` tinytext COLLATE utf8mb4_unicode_ci NOT NULL,
  `brand` tinytext COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity` smallint(6) NOT NULL,
  `productKind` tinytext COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Zrzut danych tabeli `products`
--

INSERT INTO `products` (`id`, `name`, `image`, `description`, `price`, `category`, `dateAdded`, `brand`, `quantity`, `productKind`) VALUES
('1168099e-0b1a-48cf-8b34-e5d54eaeb21c', 'Piłka baseball 1', '/static/media/baseballBall1.528c7278c8db273e4930.png', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur', '87.00', 'baseball', '2022-08-06', 'CompanyB', 14, 'piłki baseballowe'),
('2276be4d-6147-4984-b153-2b5584c6b8a9', 'Kij baseball', '/static/media/baseballStick1.a1505041920a97e8cb24.png', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur', '57.00', 'baseball', '2022-08-03', 'ComT', 4, 'kije do baseballa-a'),
('25733414-2054-44b3-9dd2-0c68f73cc5fb', 'Złota piłka', '/static/media/soccerBall4.803b8a98a08e1993e076.png', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur', '267.00', 'piłka nożna', '2022-07-26', 'ComS', 3, 'piłki do nogi'),
('2dda5d7a-8af5-4970-acae-95cce3003a72', 'Kask hokej A', '/static/media/hockeyHelmet1.350cdb06dc37c38ac2d1.png', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud iquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur', '223.00', 'hokej', '2022-07-11', 'ComH', 4, 'kaski hokejowe'),
('3192579b-6b1c-465b-8170-63cd3947a717', 'Rakieta 3', '/static/media/badmintonRacket3.3a12bbe60a1088237e2b.png', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur', '45.00', 'badminton', '2022-08-03', 'Com5', 3, 'rakiety do badmintona'),
('37182180-ac55-440c-95e5-9433b07cc97a', 'Piłka Lewy', '/static/media/soccerBall3.b0e9233877210ceb6b27.png', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur', '234.00', 'piłka nożna', '2022-07-29', 'ComS', 12, 'piłki do nogi'),
('3903c737-65a4-43ee-a53e-8aa390ab187b', 'Koszulka RL19', '/static/media/soccerTshirt4.7d1effbf1d3dfaca123d.png', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur', '129.00', 'piłka nożna', '2022-08-03', 'SoccExtra', 7, 'koszulki piłkarskie'),
('48d1dc2f-8342-47d0-adc0-735f5fce8b3d', 'Rakietka 1', '/static/media/badmintonRacket1.ab27b51a7284dcbd79d6.png', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur', '112.00', 'badminton', '2022-07-28', 'Company3', 23, 'rakiety do badmintona'),
('5945d9e1-357d-4ff1-9e8c-cb22ac96cb3b', 'Piłka baseball', '/static/media/baseballBall1.528c7278c8db273e4930.png', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur', '34.00', 'baseball', '2022-07-27', 'CompB', 13, 'piłki baseballowe'),
('5a0d8be9-b28e-431b-aa6d-02b277d7aae2', 'Kask do hokeja B', '/static/media/hockeyHelmet2.29e6d7877704a1f8c782.png', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur', '56.00', 'hokej', '2022-07-23', 'ComH', 4, 'kaski hokejowe'),
('65eb9275-38cb-4190-b020-795c5d77f67d', 'Tshirt do rugby', '/static/media/rugbyShirt1.52d98a03ce702fb1ab04.png', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed pariatur', '221.00', 'rugby', '2022-08-02', 'ComR', 2, 'koszulki do rugby'),
('6686e2d9-6df0-42c6-bf34-5bfee0eb6ef8', 'Tablica do kosza A', '/static/media/basketballBackBoard1.c2244052d88f760dc9c9.png', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur', '145.00', 'koszykówka', '2022-07-29', 'NBA', 4, 'tablice do kosza'),
('872710b0-0512-464c-8634-73a8ebf41f8d', 'Piłki Iga', '/static/media/tennisBalls1.23750c9b8f4935866509.png', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur', '34.00', 'tenis', '2022-07-28', 'IgaCom', 4, 'piłki do tenisa'),
('8acaf66c-b270-40cc-8522-fca08e2efb31', 'Rakieta Iga', '/static/media/tennisRacket1.70b3c400063c0dc341a6.png', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur', '267.00', 'tenis', '2022-07-21', 'IgaCom', 3, 'rakiety do tenisa'),
('9b798118-d79a-4986-9636-86d2c42aa131', 'Rakietka 2', '/static/media/badmintonRacket2.2220173f0f277f97b408.png', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur', '67.00', 'badminton', '2022-07-11', 'Com4', 12, 'rakiety do badmintona'),
('b3b66a7f-0eda-4084-8eab-f0bb8d128647', 'Piłka do rugby A', '/static/media/RugbyBall1.ab24e90626487b19eed2.png', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur', '134.00', 'rugby', '2022-08-05', 'ComR', 6, 'piłki do rugby'),
('c9211d00-120b-4ce5-9ffe-cd814cba9f76', 'Hokejówka', '/static/media/hockeyStick1.1d36fd16572df3c0e21b.png', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur', '89.00', 'hokej', '2022-06-27', 'ComH', 4, 'kije hokejowe'),
('d212765e-2f0c-4bea-8f75-ed861fe513b5', 'Rękawice steel', '/static/media/soccerGloves3.28ab02ff2d997df307bb.png', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur', '237.00', 'piłka nożna', '2022-07-11', 'ComSoccer', 5, 'rękawice bramkarskie'),
('dd53cc18-9746-4908-ad7f-42f9982b52fc', 'Extra piłka do kosza', '/static/media/basketballBall1.21db2a8e34fdb06b4e1d.png', 'Lorem ipsum dolor sit amet, ', '78.00', 'koszykówka', '2022-07-11', 'ComBasket', 23, 'piłki do koszykówki'),
('e835fcc1-1001-4411-b1ac-49303d293fcd', 'Piłka baseball 2', '/static/media/baseballBall2.b8788494c338fdb150c0.png', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur', '89.00', 'baseball', '2022-07-11', 'Com2', 14, 'piłki baseballowe'),
('ebaacf3a-d57a-489c-89ef-30b6cea1d4eb', 'Getry piłkarskie', '/static/media/soccerSocks4.0dda6f08c452e1fe5644.png', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur', '23.00', 'piłka nożna', '2022-07-02', 'SoccerCom', 6, 'getry piłkarskie'),
('faa44650-448a-4230-b910-0e591bf4af78', 'Łapacze Dudek', '/static/media/soccerGloves1.1209ed5d44c04b4131c3.png', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur', '189.00', 'piłka nożna', '2022-07-27', 'ComS', 2, 'rękawice bramkarskie');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userName` tinytext COLLATE utf8mb4_unicode_ci NOT NULL,
  `userPassword` tinytext COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Zrzut danych tabeli `users`
--

INSERT INTO `users` (`id`, `userName`, `userPassword`) VALUES
('30502b0c-37c9-42f4-a7f6-0cafe98f2cb7', 'KubaK', '$2b$10$M12uoD6m8bhovp1uhevAKO87NMAPEyr7qNOZOvrnPq/Apc3yoCgEe'),
('3e8412c9-0df4-4c3b-a57d-b4d1c9e9bcf0', 'BartekB', '$2b$10$GLbMqUaJFu.BGI2R.d6l2.x6NX3tzNfEBUkpeqlvvp9.48GV/IUFi'),
('9f1593e6-a9d5-4727-9314-25a1ad8d3eea', 'Miro', '$2b$10$CtdCAeaX4K/I0y3W9uYijuKnsuEP2g6g9NcN34n/sEYWZ12vw5Gy6');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
