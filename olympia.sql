-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Авг 27 2019 г., 08:57
-- Версия сервера: 10.3.16-MariaDB
-- Версия PHP: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `olympia`
--

-- --------------------------------------------------------

--
-- Структура таблицы `administrators`
--

CREATE TABLE `administrators` (
  `id` int(11) NOT NULL,
  `login` varchar(20) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `user_hash` varchar(32) NOT NULL,
  `temp_hash` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `administrators`
--

INSERT INTO `administrators` (`id`, `login`, `password_hash`, `user_hash`, `temp_hash`) VALUES
(1, 'olympichek', '$2y$10$7x/0dDJYr42zPanAmbt1..DJLfkaeCyGZHZSb9XFPQOYste6.Xt1O', '8e341709f91cf7efe8952d2eb2824da5', '7e8181b78cd50fbae5f07c1fd61b1ffd'),
(2, 'olympich', '$2y$10$vlqId93KMNnB.ilMnmOVpObiOHaM1PzN8EoqCrUtY.kJZ09o.ry/.', '87e37ccec8cd624fc99810764b2dfd17', 'cda7552d5934006cb18006ea772cdb33');

-- --------------------------------------------------------

--
-- Структура таблицы `banners`
--

CREATE TABLE `banners` (
  `id` int(11) NOT NULL,
  `page_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `caption` text NOT NULL,
  `link` text NOT NULL,
  `img` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `banners`
--

INSERT INTO `banners` (`id`, `page_id`, `order_id`, `caption`, `link`, `img`) VALUES
(2, 0, 2, 'Катер «Азовье»1', 'http://kater-bayda.zp.ua', '/uploads/images/right_images/all/03.gif'),
(3, 1, 1, 'спрака', 'http://498.zp.ua', '/uploads/images/right_images/all/03.gif'),
(4, 3, 1, 'справка(контакты)', '/', '/uploads/images/right_images/all/03.gif'),
(5, 0, 3, 'Новый баннер (5)', '/', '/uploads/images/right_images/all/01.gif'),
(6, 0, 4, 'Новый баннер (6)', '/', '/uploads/images/right_images/all/02.gif');

-- --------------------------------------------------------

--
-- Структура таблицы `menu_main_items`
--

CREATE TABLE `menu_main_items` (
  `id` int(11) NOT NULL,
  `page_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `menu_main_items`
--

INSERT INTO `menu_main_items` (`id`, `page_id`, `order_id`) VALUES
(1, 4, 1),
(2, 5, 2),
(3, 6, 3),
(4, 7, 4),
(5, 8, 5),
(6, 9, 6),
(7, 10, 7),
(8, 11, 8),
(9, 12, 9),
(10, 13, 10),
(11, 14, 11);

-- --------------------------------------------------------

--
-- Структура таблицы `menu_sub_items`
--

CREATE TABLE `menu_sub_items` (
  `id` int(11) NOT NULL,
  `page_id` int(11) NOT NULL,
  `parent_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `menu_sub_items`
--

INSERT INTO `menu_sub_items` (`id`, `page_id`, `parent_id`, `order_id`) VALUES
(1, 15, 1, 1),
(2, 16, 1, 2);

-- --------------------------------------------------------

--
-- Структура таблицы `pages`
--

CREATE TABLE `pages` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `name_russian` varchar(200) NOT NULL,
  `href` varchar(255) NOT NULL,
  `important` tinyint(1) NOT NULL,
  `text` text NOT NULL,
  `date` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `pages`
--

INSERT INTO `pages` (`id`, `name`, `name_russian`, `href`, `important`, `text`, `date`) VALUES
(1, 'main', 'Главная страница', '/', 1, '<p style=\"text-align:center;\"><span style=\"color:maroon;\"><strong>ООО \"ОЛИМПИЯ\"</strong></span></p><p style=\"text-align:center;\"><strong>Украина, г. Запорожье</strong></p><p><a href=\"http://498.zp.ua/\"><span style=\"color:olive;\"><strong>телефонная БИЗНЕС СПРАВКА</strong></span></a></p><p>информация о товарах, услугах, фирмах г. Запорожья</p><p><i>бесплатно<strong> по телефону</strong>, факсу, электронной почте + интернет версия на сайте 498.zp.ua</i></p><p style=\"text-align:center;\"><a href=\"http://olympia.zp.ua/reclama.php\"><span style=\"color:olive;\"><strong>ИЗГОТОВЛЕНИЕ И РАЗМЕЩЕНИЕ РЕКЛАМЫ&nbsp;</strong></span></a><br><a href=\"http://olympia.zp.ua/reclama.php\"><span style=\"color:olive;\"><strong>(РЕКЛАМНЫЕ УСЛУГИ)</strong></span></a></p><p>&nbsp;</p><ul><li><a href=\"http://olympia.zp.ua/gazets.php\">в СМИ Запорожья, Украины, ближнего зарубежья&nbsp;</a></li><li><a href=\"http://olympia.zp.ua/bogdani.php\">в транспорте</a> (электронное табло внутри транспорта)</li><li><a href=\"http://olympia.zp.ua/narujka.php\">наружная реклама</a> (таблички, указатели, щиты, вывески, оформление витрин, баннеры, лайт-боксы, сити-лайты, штендеры и др.)</li><li><a href=\"http://olympia.zp.ua/package.php\">на пакетах</a></li><li><a href=\"http://olympia.zp.ua/supermarket.php\">в супермаркетах</a></li><li><a href=\"http://olympia.zp.ua/spichki.php\">на спичках</a></li><li><a href=\"http://olympia.zp.ua/site.php\">в интернете</a></li></ul><p><a href=\"http://olympia.zp.ua/desing.php\"><span style=\"color:olive;\"><strong>ДИЗАЙН</strong></span></a></p><p>логотипы, оригинал-макеты, флеш-анимация</p><p><span style=\"font-size:12px;color:rgb(0,0,255);\"><strong>ПРОИЗВОДСТВО</strong></span></p><ul><li><a href=\"http://olympia.zp.ua/stends.php\">стенды</a> информационные, рекламные (<a href=\"http://olympia.zp.ua/stends%20school.php\">для школ</a>, <a href=\"http://olympia.zp.ua/hospital.php\">больниц</a>, <a href=\"http://olympia.zp.ua/kindergarten.php\">детсадов</a>, магазинов, предприятий)</li><li><a href=\"http://olympia.zp.ua/narujka.php\">наружная</a> реклама (таблички режим работы, вывески, рекламные и информационные щиты, оформление с/к пленкой, световая реклама, лайт-боксы, сити-лайты, баннеры, штендеры, светодиодные конструкции)</li><li><a href=\"http://olympia.zp.ua/znaks.php\">дорожные указатели, указатели улиц</a></li><li><a href=\"http://olympia.zp.ua/torg.php\">торговое</a> оборудование (стеллажи, полки, перегородки, камеры хранения, примерочные и др.)</li><li><a href=\"http://olympia.zp.ua/excl.php\">эксклюзивные</a> изделия ручной работы (изделия из пластика, ДВП, ДСП, металла)</li><li>номерки (для одежды, для ключей)</li><li><a href=\"http://olympia.zp.ua/package.php\">пакеты</a> с изображением (с рекламой)</li><li>настенные картины (печать на холсте) и фотографии с рамой</li></ul><p style=\"text-align:center;\"><a href=\"http://olympia.zp.ua/poly.php\"><span style=\"color:olive;\"><strong>ПОЛИГРАФИЯ</strong></span></a></p><ul><li>Бланки</li><li><a href=\"http://olympia.zp.ua/list.php\">Листовки</a></li><li><a href=\"http://olympia.zp.ua/visit.php\">Визитки</a></li><li>Флаера</li><li>Буклеты</li><li><a href=\"http://olympia.zp.ua/cennik.php\">Ценники</a></li><li>Объявления (возможно распространение, оклейка)</li><li>Переплетные работы</li></ul><p style=\"text-align:center;\">&nbsp;</p><p style=\"text-align:center;\"><a href=\"http://olympia.zp.ua/shirokoformatnaya%20pechat.php\"><span style=\"color:olive;\"><strong>ШИРОКОФОРМАТНАЯ ПЕЧАТЬ</strong></span></a></p><p style=\"text-align:center;\">(нанесение полноцветного изображения на с/к пленку, бумагу, баннерную ткань, холст)</p><p style=\"text-align:center;\"><a href=\"http://olympia.zp.ua/publika.php\"><span style=\"color:olive;\"><strong>ПУБЛИКАЦИЯ ДЕЛОВОЙ ИНФОРМАЦИИ</strong></span></a></p><p style=\"text-align:center;\">(о деятельности акционерных обществ Запорожья, Украины, о проведении собраний, годовых отчетов, о ликвидации предприятий, утери документов и др.)</p><p style=\"text-align:center;\"><strong>Украина, г. Запорожье</strong></p>', 1566841355),
(2, 'art', 'Живопись', '/pages/art', 0, '<p>Живопись</p>', 1561966603),
(3, 'contacts', 'Контакты', '/contacts', 1, '', 1560766934),
(4, 'advertising', 'Реклама', '/pages/advertising', 0, '', 1561021390),
(5, 'polygraphy', 'Полиграфия', '/pages/polygraphy', 0, '', 1561021870),
(6, 'interior', 'Интерьер', '/pages/interior', 0, '', 1561021902),
(7, 'art_workshop', 'Художественная мастерская', '/pages/art_workshop', 0, '', 1561021971),
(8, 'vacancy', 'Вакансии', '/pages/vacancy', 0, '', 1561022014),
(9, 'stands', 'Стенды', '/pages/stands', 0, '', 1561022041),
(10, 'repair_and_construction', 'Ремонтно-строительные услуги', '/pages/repair_and_construction', 0, '', 1561022124),
(11, 'large_format_printing', 'Широкоформатная печать', '/pages/large_format_printing', 0, '', 1561022181),
(12, 'advertising_materials', 'Материалы для рекламы', '/pages/advertising_materials', 0, '', 1561022226),
(13, 'web_design_and_creation', 'Разработка и создание сайтов', '/pages/web_design_and_creation', 0, '', 1561022318),
(14, 'ticker', 'Бегущая строка', '/pages/ticker', 0, '', 1561022352),
(15, 'advertising_in_privoz_newspaper', 'Реклама в газете \"Привоз\"', '/pages/advertising_in_privoz_newspaper', 0, '', 1561055588),
(16, 'advertising_in_newspapers', 'Реклама в газетах Украины и Запорожья', '/pages/advertising_in_newspapers', 0, '', 1561064513),
(17, 'driving_directions', 'Схема проезда', '/pages/driving_directions', 0, '', 1561174592),
(18, 'partners', 'Наши партнеры', '/pages/partners', 0, '', 1561174615),
(34, 'test', 'Новая страница (test)', '/page/test', 0, 'Текст новой страницы (test)', 1566852675);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `administrators`
--
ALTER TABLE `administrators`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `banners`
--
ALTER TABLE `banners`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `menu_main_items`
--
ALTER TABLE `menu_main_items`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `order_id` (`order_id`);

--
-- Индексы таблицы `menu_sub_items`
--
ALTER TABLE `menu_sub_items`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `administrators`
--
ALTER TABLE `administrators`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `banners`
--
ALTER TABLE `banners`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `menu_main_items`
--
ALTER TABLE `menu_main_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT для таблицы `menu_sub_items`
--
ALTER TABLE `menu_sub_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `pages`
--
ALTER TABLE `pages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
