drop database `RcCrafters`;
Create database `RcCrafters`;
Use `RcCrafters`;
CREATE TABLE IF NOT EXISTS `User` (
  `ID` mediumint unsigned NOT NULL auto_increment,
  `Username` varchar(10) NOT NULL,
  `Password` varchar(10) NOT NULL,
  `Email` varchar(20) NOT NULL,
  `Role` varchar(5) NOT NULL,
  PRIMARY KEY  (`ID`),
  UNIQUE KEY (`username`)
);

CREATE TABLE IF NOT EXISTS `UserDetail` (
  `ID` mediumint unsigned NOT NULL auto_increment,
  `Username` varchar(20) NOT NULL,
  `Address1` varchar(50) NOT NULL,
  `Address2` varchar(50),
  `City` varchar(30) NOT NULL,
  `State` varchar(10) NOT NULL, 
  `Zip` varchar(16) NOT NULL,
  PRIMARY KEY  (`ID`),
  foreign key (`Username`) references User(`Username`) on delete cascade
);

CREATE TABLE IF NOT EXISTS `Product` (
  `ProductID` varchar(20) NOT NULL,
  `Description` varchar(100) NOT NULL,
  `Price` decimal(15,2) NOT NULL,
  `PicPath` varchar(50),
  `ButtonText` varchar(75),
  `Type` varchar(10),
  PRIMARY KEY  (`ProductID`)
);

CREATE TABLE IF NOT EXISTS `ProductOptions` (
  `ID` mediumint unsigned NOT NULL auto_increment,
  `OptionID` varchar(20) NOT NULL,
  `ProductID` varchar(20) NOT NULL,
  `Description` varchar(100) NOT NULL,
  `Price` decimal(15,2) NOT NULL,
  PRIMARY KEY  (`ID`)
);

CREATE TABLE IF NOT EXISTS `Order` (
  `OrderID` int(10) unsigned NOT NULL auto_increment,
  `Username` varchar(10) NOT NULL,
  `Date` date NOT NULL,
  `Total` decimal(15,2) NOT NULL,
  PRIMARY KEY  (`OrderID`)
);

CREATE TABLE IF NOT EXISTS `OrderDetail` (
  `LineID` mediumint NOT NULL,
  `OrderID` mediumint NOT NULL,
  `ProductID` varchar(12) NOT NULL,
  `Description` varchar(100) NOT NULL,
  `Qty` int NOT NULL,
  `Amount` decimal(15,2) NOT NULL,
  PRIMARY KEY  (`LineID`,`OrderID`)
);

CREATE TABLE IF NOT EXISTS `Ordernumber` (
	`Ordernumber` mediumint DEFAULT 1
);

insert into Product (`ProductID`,`Description`,`Price`,`PicPath`,`ButtonText`,`Type`) VALUES ('F9FZ6All','1/6th Scale Ziroli F-9F Panther Strut Set',450.00,'assets/images/Jets/16ZiroliF-9F/','1/6 Ziroli F-9F Strut Set','Jet');
insert into ProductOptions (`OptionID`,`ProductID`,`Description`,`Price`) VALUES ('F9FZ6AllOpt1','F9FZ6All','add Jet Model Products retracts',345.00);
insert into Product (`ProductID`,`Description`,`Price`,`PicPath`,`ButtonText`,`Type`) VALUES ('F9FP6All','1/6th Scale Palmer F-9F Cougar Strut Set',495.00,'assets/images/Jets/16PalmerF-9F/','1/6 Palmer F-9F Strut Set','Jet');
insert into ProductOptions (`OptionID`,`ProductID`,`Description`,`Price`) VALUES ('F9FP6AllOpt1','F9FP6All','add Jet Model Products retracts',300.00);
insert into Product (`ProductID`,`Description`,`Price`,`PicPath`,`ButtonText`,`Type`) VALUES ('F9FJHH9All','1/9th Scale JHH F-9F Panther/Cougar Strut Set',350.00,'assets/images/Jets/19JHHF-9F/','1/9 JHH F-9F Strut Set','Jet');
insert into ProductOptions (`OptionID`,`ProductID`,`Description`,`Price`) VALUES ('F9FJHH9AllOpt1','F9FJHH9All','machine and mount brakes',45.00);
insert into Product (`ProductID`,`Description`,`Price`,`PicPath`,`ButtonText`,`Type`) VALUES ('F18Y10All','1/10th Scale Yellow F-18 Thorpe Strut Set',550.00,'assets/images/Jets/110F-18/','1/10 Yellow F-18 Thorpe Strut Set','Jet');
insert into ProductOptions (`OptionID`,`ProductID`,`Description`,`Price`) VALUES ('F18Y10AllOpt1','F18Y10All','fit cutomer supplied main wheels and brakes',35.00);
insert into Product (`ProductID`,`Description`,`Price`,`PicPath`,`ButtonText`,`Type`) VALUES ('F18B8All','1/8th Scale Byron F-18 Strut Set',650.00,'assets/images/Jets/18ByronF-18/','1/8 Byron F-18 Strut Set','Jet');
insert into ProductOptions (`OptionID`,`ProductID`,`Description`,`Price`) VALUES ('F18B8AllOpt1','F18B8All','fit cutomer supplied main wheels and brakes',30.00);
insert into Product (`ProductID`,`Description`,`Price`,`PicPath`,`ButtonText`,`Type`) VALUES ('F18Y7All','1/7th Scale Yellow F-18 Strut Set',850.00,'assets/images/Jets/17YellowF-18/','1/7 Yellow F-18 Strut Set','Jet');
insert into Product (`ProductID`,`Description`,`Price`,`PicPath`,`ButtonText`,`Type`) VALUES ('F4JHHY10All','1/10th Scale Jet Hangar Hobbies/Yellow F-4 Phantom Strut Set',575.00,'assets/images/Jets/110JHHF-4/','1/10 JHH/Yellow F-4 Strut Set','Jet');
insert into ProductOptions (`OptionID`,`ProductID`,`Description`,`Price`) VALUES ('F4JHHY10AllOpt1','F4JHHY10All','strut set/new rocker blocks/modify JHH or Robart retracts',75.00);
insert into ProductOptions (`OptionID`,`ProductID`,`Description`,`Price`) VALUES ('F4JHHY10AllOpt2','F4JHHY10All','fit brakes to struts',35.00);
insert into Product (`ProductID`,`Description`,`Price`,`PicPath`,`ButtonText`,`Type`) VALUES ('F4JMP8All','1/8th Scale Jet Model Products F-4 Phantom II Strut Set',750.00,'assets/images/Jets/18JMPF-4/','1/8 JMP F-4 II Strut Set','Jet');
insert into Product (`ProductID`,`Description`,`Price`,`PicPath`,`ButtonText`,`Type`) VALUES ('A7JHH10All','1/10th Scale Jet Hangar Hobbies A-7 Strut/Retract System',650.00,'assets/images/Jets/110JHHA-7/','1/10 JHH A-7 Strut/Retract System','Jet');
insert into Product (`ProductID`,`Description`,`Price`,`PicPath`,`ButtonText`,`Type`) VALUES ('F86JHH10All','1/10th Scale Jet Hangar Hobbies F-86 Strut Set',450.00,'assets/images/Jets/1_10JHHF-86/','1/10 JHH F-86 Strut Set','Jet');
insert into Product (`ProductID`,`Description`,`Price`,`PicPath`,`ButtonText`,`Type`) VALUES ('ER3Z6All','1/6th Scale Ziroli Ercoup-3 gear set and wing mount blocks',550.00,'assets/images/NonJets/16ZiroliErcoupe/','1/6 Ziroli Ercoupe-3 Strut and Wing Blk Set','NonJet');
insert into Product (`ProductID`,`Description`,`Price`,`PicPath`,`ButtonText`,`Type`) VALUES ('MIRJHH10All','1/10th Scale Jet Hangar Hobbies Mirage gear strut set',495.00,'assets/images/Jets/110JHHMirage/','1/10 JHH Mirage Strut Set','Jet');
insert into ProductOptions (`OptionID`,`ProductID`,`Description`,`Price`) VALUES ('MIRJHH10AllOpt1','MIRJHH10All','Detail kit',55.00);
insert into Product (`ProductID`,`Description`,`Price`,`PicPath`,`ButtonText`,`Type`) VALUES ('MIRJHH10NOSE','1/10th Scale Jet Hangar Hobbies Mirage Nose Strut',150.00,'assets/images/Jets/110JHHMirageNose/','1/10 JHH Mirage Nose Strut','Jet');
insert into ProductOptions (`OptionID`,`ProductID`,`Description`,`Price`) VALUES ('MIRJHH10NOSEOpt1','MIRJHH10NOSE','Detail kit',45.00);
insert into Product (`ProductID`,`Description`,`Price`,`PicPath`,`ButtonText`,`Type`) VALUES ('A78All','1/8th Scale A-7 Nose Strut and Main gear system',1200.00,'assets/images/Jets/18A-7/','1/8 A-7 Strut Set','Jet');
insert into Product (`ProductID`,`Description`,`Price`,`PicPath`,`ButtonText`,`Type`) VALUES ('T45TENGAll','Jet Teng T-45 Strut Set',550.00,'assets/images/Jets/T45JetTeng/','Jet Teng T-45 Strut Set','Jet');
insert into Product (`ProductID`,`Description`,`Price`,`PicPath`,`ButtonText`,`Type`) VALUES ('A20PALAll','Palmer A-20 Havoc Strut Set',495.00,'assets/images/NonJets/A20Havoc/','Palmer A-20 Havoc Strut Set','NonJet');
insert into ProductOptions (`OptionID`,`ProductID`,`Description`,`Price`) VALUES ('A20PALAllOpt1','A20PALAll','Century jet nose retract JMP main retracts and adapters',300.00);
insert into Product (`ProductID`,`Description`,`Price`,`PicPath`,`ButtonText`,`Type`) VALUES ('BOB6ALL','Cessna Bobcat 1/6 scale K-Flight Struts',375.00,'assets/images/NonJets/16CessnaBobcat/','1/6 Cessna Bobcat K-Flight Struts','NonJet');
insert into Product (`ProductID`,`Description`,`Price`,`PicPath`,`ButtonText`,`Type`) VALUES ('OV10AALL','OV-10A Bronco Struts Palmer plans complete bolt into model',1595.00,'assets/images/NonJets/1_6Bronco/','OV-10A Bronco Palmer Complete bolt-in','NonJet');
insert into ProductOptions (`OptionID`,`ProductID`,`Description`,`Price`) VALUES ('OV10AALLOpt1','OV10AALL','retracts/mounts/wheels',00.00);
insert into Product (`ProductID`,`Description`,`Price`,`PicPath`,`ButtonText`,`Type`) VALUES ('FJ48ALL','FJ-4 Fury 1/8th scale strut and retract set(complete bolt-in model)',1395.00,'assets/images/Jets/18FJ-4Fury/','1/8 FJ-4 Strut/Retract Set','Jet');
Use `RcCrafters`;
Select * from Product;
Select * from ProductOptions;
/*SELECT 
   *
FROM
    Product
INTO OUTFILE 'C:/Product.csv' 
FIELDS ENCLOSED BY '"' 
TERMINATED BY ';' 
ESCAPED BY '"' 
LINES TERMINATED BY '\r\n';*/