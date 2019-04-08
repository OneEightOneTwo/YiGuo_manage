/*
Navicat MySQL Data Transfer

Source Server         : 1812
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : yiguo

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-04-08 16:50:46
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(255) DEFAULT NULL,
  `addTime` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES ('1', '海鲜水产', '1554281501736');
INSERT INTO `category` VALUES ('10', '精选肉类1', '1554281501736');
INSERT INTO `category` VALUES ('4', '进口水果', '1554280912078');
INSERT INTO `category` VALUES ('5', '精选肉类', '1554280921466');
INSERT INTO `category` VALUES ('12', '6666', '1554281796756');
INSERT INTO `category` VALUES ('11', '精选肉类3', '1554281701373');

-- ----------------------------
-- Table structure for goodslist
-- ----------------------------
DROP TABLE IF EXISTS `goodslist`;
CREATE TABLE `goodslist` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `classify` varchar(255) DEFAULT NULL,
  `oldprice` decimal(10,2) DEFAULT NULL,
  `nowprice` decimal(10,2) DEFAULT NULL,
  `inventory` decimal(55,0) DEFAULT NULL,
  `addTime` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `introduce` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodslist
-- ----------------------------
INSERT INTO `goodslist` VALUES ('1', '国产红霞草莓1盒(约400g/盒)', '1.jpg&', '国产水果', '68.80', '59.80', '444', '1554281501736', '上架', null);
INSERT INTO `goodslist` VALUES ('2', '智利蓝莓2盒(约125g/盒)', '2.jpg&', '进口水果', '72.90', '59.90', '435', '1554281501736', '上架', null);
INSERT INTO `goodslist` VALUES ('3', '泰森冰冻鸡凤爪454g', '3.jpg&', '禽类蛋品', '28.00', '24.00', '1431', '1554281501736', '下架', null);
INSERT INTO `goodslist` VALUES ('4', '国产精品红霞草莓1盒(约900g/盒)', '4.jpg&', '国产水果', '109.00', '99.99', '28', '1554281501736', '上架', null);
INSERT INTO `goodslist` VALUES ('5', 'SunMoon能量STAR墨西哥牛油果6个130-160g/个', '5.jpg&', '进口水果', '52.90', '49.90', '458', '1554281501736', '上架', null);
INSERT INTO `goodslist` VALUES ('6', '\r\n\r\n澳洲谷饲小公牛雪花牛肉粒250g', '1.jpg&', '肉品禽类', '58.00', '49.90', '0', '1554281501736', '下架', null);
INSERT INTO `goodslist` VALUES ('7', 'CP正大老母鸡1.5kg', '1.jpg&', '肉品禽类', '82.90', '79.90', '14', '1554281501736', '下架', null);
INSERT INTO `goodslist` VALUES ('8', '阿根廷红虾(L2)2kg', '1.jpg&', '海鲜水产', '159.00', '148.00', '49', '1554281501736', '上架', null);
INSERT INTO `goodslist` VALUES ('9', '云南新鲜羊肚菌500g', '1.jpg&', '清新鲜蔬', '208.00', '168.00', '22', '1554281501736', '上架', null);
INSERT INTO `goodslist` VALUES ('10', '重庆万州血橙1.5kg130g以上/个', '1.jpg&', '国产水果', '50.00', '48.00', '167', '1554281501736', '上架', null);
INSERT INTO `goodslist` VALUES ('11', '云南蒙自枇杷1盒(约400g/盒)', '1.jpg&', '国产水果', '58.80', '49.90', '426', '1554281501736', '上架', null);
INSERT INTO `goodslist` VALUES ('15', '1', '1554700405487.jpg&', '海鲜水产', '1.00', '1.00', '1', '1554700405515', '上线', '12');
INSERT INTO `goodslist` VALUES ('16', '3', '1554702848185.jfif&', '精选肉类1', '3.00', '3.00', '3', '1554702848195', '上线', '3');

-- ----------------------------
-- Table structure for orders
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `orderNumber` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `total` decimal(15,2) DEFAULT NULL,
  `placeOrder` varchar(255) DEFAULT NULL,
  `placeTime` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `payState` varchar(255) DEFAULT NULL,
  `orderSource` varchar(255) DEFAULT NULL,
  `contact` varchar(255) DEFAULT NULL,
  `tel` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of orders
-- ----------------------------
INSERT INTO `orders` VALUES ('1', '385705283096510185', '新疆库尔勒精选香梨1kg约120g/个', '22.80', '橙子', '2019-03-30 15:08:05', '已支付', '易果App', '刘小姐', '13527875214', '广东省广州市天河区元岗');
INSERT INTO `orders` VALUES ('2', '348575346396510125', '原膳澳洲谷饲小公牛牡蛎牛排200g(3片)', '35.00', '沛沛', '2019-03-30 15:10:17', '已支付', '易果App', '江小姐', '13297553032', '广东省广州市白云区嘉禾望岗');
INSERT INTO `orders` VALUES ('3', '357686463464588263', '阿榴哥泰国金枕头冷冻榴莲果肉300g', '69.90', '涵涵lala', '2019-03-30 15:14:28', '待支付', '易果PC', '郑小姐', '15736790432', '广东省广州市番禺区');
INSERT INTO `orders` VALUES ('4', '427659745315247564', '原膳乌拉圭精修牛腩1kg', '59.80', '彩彩呦', '2019-03-30 15:08:35', '已支付', '易果App', '陈小姐', '13658679646', '广东省茂名市高州');
INSERT INTO `orders` VALUES ('5', '364697573452535865', '国产红霞草莓1盒(约400g/盒)', '59.90', '臭屁林', '2019-03-30 15:09:42', '待支付', '易果App', '陈先生', '13846362626', '广东省广州市越秀区');
INSERT INTO `orders` VALUES ('6', '364697845625125245', '中洋河豚河豚鱼(暗纹东方鲀)150g', '48.00', '芳芳', '2019-03-30 15:11:17', '待支付', '易果PC', '张小姐', '15936357468', '广东省广州市天河区五山');
INSERT INTO `orders` VALUES ('7', '467468464253635764', '康美人参欢享装礼盒180g(4-5根装)', '138.00', '东东', '2019-03-30 15:14:34', '已支付', '易果PC', '王先生', '18944353253', '广东省广州市天河区');
INSERT INTO `orders` VALUES ('8', '365476967453547454', '心中甜每日坚果750g(25g*30)', '128.00', '拉拉', '2019-03-30 15:14:47', '已支付', '易果App', '林先生', '13653475861', '广东省广州市花都区');
INSERT INTO `orders` VALUES ('9', '316358596623524757', '心中甜开心果168g', '52.80', '峰峰', '2019-03-30 16:15:14', '已支付', '易果App', '李先生', '15932437582', '广东省广州市天河区');
INSERT INTO `orders` VALUES ('10', '313534746957434754', '山东烟薯2.5kg', '39.80', '小橙子', '2019-03-30 15:17:05', '已支付', '易果App', '黄小姐', '13823475742', '广东省广州市白云区');
INSERT INTO `orders` VALUES ('11', '343746684562353263', '阿根廷红虾(L2)2kg', '148.80', 'bobo', '2019-03-30 15:17:56', '未支付', '易果App', '刘小姐', '13623634748', '广东省广州市越秀区');
INSERT INTO `orders` VALUES ('12', '385705283096510185', '新疆库尔勒精选香梨1kg约120g/个', '22.80', '橙子', '2019-03-30 15:08:05', '已支付', '易果App', '刘小姐', '13527875214', '广东省广州市天河区元岗');
INSERT INTO `orders` VALUES ('13', '348575346396510125', '原膳澳洲谷饲小公牛牡蛎牛排200g(3片)', '35.00', '沛沛', '2019-03-30 15:10:17', '已支付', '易果App', '江小姐', '13297553032', '广东省广州市白云区嘉禾望岗');
INSERT INTO `orders` VALUES ('14', '357686463464588263', '阿榴哥泰国金枕头冷冻榴莲果肉300g', '69.90', '涵涵lala', '2019-03-30 15:14:28', '待支付', '易果PC', '郑小姐', '15736790432', '广东省广州市番禺区');
INSERT INTO `orders` VALUES ('15', '427659745315247564', '原膳乌拉圭精修牛腩1kg', '59.80', '彩彩呦', '2019-03-30 15:08:35', '已支付', '易果App', '陈小姐', '13658679646', '广东省茂名市高州');
INSERT INTO `orders` VALUES ('16', '364697573452535865', '国产红霞草莓1盒(约400g/盒)', '59.90', '臭屁林', '2019-03-30 15:09:42', '待支付', '易果App', '陈先生', '13846362626', '广东省广州市越秀区');
INSERT INTO `orders` VALUES ('17', '364697845625125245', '中洋河豚河豚鱼(暗纹东方鲀)150g', '48.00', '芳芳', '2019-03-30 15:11:17', '待支付', '易果PC', '张小姐', '15936357468', '广东省广州市天河区五山');
INSERT INTO `orders` VALUES ('18', '467468464253635764', '康美人参欢享装礼盒180g(4-5根装)', '138.00', '东东', '2019-03-30 15:14:34', '已支付', '易果PC', '王先生', '18944353253', '广东省广州市天河区');
INSERT INTO `orders` VALUES ('19', '313534746957434754', '山东烟薯2.5kg', '39.80', '小橙子', '2019-03-30 15:17:05', '已支付', '易果App', '黄小姐', '13823475742', '广东省广州市白云区');
INSERT INTO `orders` VALUES ('20', '364697573452535865', '国产红霞草莓1盒(约400g/盒)', '59.90', '臭屁林', '2019-03-30 15:09:42', '待支付', '易果App', '陈先生', '13846362626', '广东省广州市越秀区');
INSERT INTO `orders` VALUES ('21', '385705283096510185', '新疆库尔勒精选香梨1kg约120g/个', '22.80', '橙子', '2019-03-30 15:08:05', '已支付', '易果App', '刘小姐', '13527875214', '广东省广州市天河区元岗');
INSERT INTO `orders` VALUES ('22', '316358596623524757', '心中甜开心果168g', '52.80', '峰峰', '2019-03-30 16:15:14', '已支付', '易果App', '李先生', '15932437582', '广东省广州市天河区');
INSERT INTO `orders` VALUES ('23', '313534746957434754', '山东烟薯2.5kg', '39.80', '小橙子', '2019-03-30 15:17:05', '已支付', '易果App', '黄小姐', '13823475742', '广东省广州市白云区');
INSERT INTO `orders` VALUES ('24', '357686463464588263', '阿榴哥泰国金枕头冷冻榴莲果肉300g', '69.90', '涵涵lala', '2019-03-30 15:14:28', '待支付', '易果PC', '郑小姐', '15736790432', '广东省广州市番禺区');
INSERT INTO `orders` VALUES ('25', '313534746957434754', '山东烟薯2.5kg', '39.80', '小橙子', '2019-03-30 15:17:05', '已支付', '易果App', '黄小姐', '13823475742', '广东省广州市白云区');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `psw` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `identity` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', '郑若涵', '123', '女', '1554236262663', '超级管理员');
INSERT INTO `users` VALUES ('2', '陈彩', '123', '女', '1554236262663', '超级管理员');
INSERT INTO `users` VALUES ('3', '臭屁林', '123', '女', '1554236262663', '管理员');
INSERT INTO `users` VALUES ('4', '狗东狗洞', '123', '不详', '1554236262663', '管理员');
INSERT INTO `users` VALUES ('6', '123', '123', '男', '1554699756650', '管理员');
SET FOREIGN_KEY_CHECKS=1;
