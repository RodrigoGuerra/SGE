CREATE DATABASE sge_db

use sge_db

CREATE TABLE `roles` (
  `role_id` VARCHAR(38) NOT NULL,
  `role_name` VARCHAR(255),
  `can_create_student` TINYINT(1),
  `can_read_student` TINYINT(1),
  `can_update_student` TINYINT(1),
  `can_delete_student` TINYINT(1),
  `can_create_employee` TINYINT(1),
  `can_read_employee` TINYINT(1),
  `can_update_employee` TINYINT(1),
  `can_delete_employee` TINYINT(1),
  `can_create_school` TINYINT(1),
  `can_read_school` TINYINT(1),
  `can_update_school` TINYINT(1),
  `can_delete_school` TINYINT(1),
  `can_create_class` TINYINT(1),
  `can_read_class` TINYINT(1),
  `can_update_class` TINYINT(1),
  `can_delete_class` TINYINT(1),
  `can_create_discipline` TINYINT(1),
  `can_read_discipline` TINYINT(1),
  `can_update_discipline` TINYINT(1),
  `can_delete_discipline` TINYINT(1),
  `can_vinculate_student` TINYINT(1),
  `can_vinculate_employee` TINYINT(1),
  `can_vinculate_class` TINYINT(1),
  `can_vinculate_discipline` TINYINT(1),
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME,
  PRIMARY KEY (`role_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `users` (
  `user_id` VARCHAR(38) NOT NULL,
  `email` VARCHAR(255) UNIQUE,
  `phone` VARCHAR(255),
  `name` VARCHAR(255),
  `age` TINYINT,
  `role_id_fk` VARCHAR(38),
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME,
  PRIMARY KEY (`user_id`),
  FOREIGN KEY (`role_id_fk`) REFERENCES `roles` (`role_id`) ON DELETE SET NULL 
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `schools` (
  `school_id` VARCHAR(38) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `manager_id_fk` VARCHAR(38) NOT NULL,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME,  
  PRIMARY KEY (`school_id`),
  FOREIGN KEY (`manager_id_fk`) REFERENCES `users` (`user_id`) ON DELETE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `disciplines` (
  `discipline_id` VARCHAR(38) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME,  
  PRIMARY KEY (`discipline_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `teams` (
  `team_id` VARCHAR(38) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `discipline_id_fk` VARCHAR(38) NOT NULL,
  `school_id_fk` VARCHAR(38) NOT NULL,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME,  
  PRIMARY KEY (`team_id`),
  FOREIGN KEY (`discipline_id_fk`) REFERENCES `disciplines` (`discipline_id`) ON DELETE CASCADE,
  FOREIGN KEY (`school_id_fk`) REFERENCES `schools` (`school_id`) ON DELETE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `teams_users` (
  `teams_users_id` VARCHAR(38) NOT NULL,
  `team_id_fk` VARCHAR(38) NOT NULL,
  `user_id_fk` VARCHAR(38) NOT NULL,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME,  
  PRIMARY KEY (`teams_users_id`),
  FOREIGN KEY (`team_id_fk`) REFERENCES `teams` (`team_id`) ON DELETE CASCADE,
  FOREIGN KEY (`user_id_fk`) REFERENCES `users` (`user_id`) ON DELETE CASCADE  
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `roles` (`role_id`,`role_name`,`can_create_student`,`can_update_student`,`can_delete_student`,`can_create_employee`,`can_read_employee`,`can_update_employee`,`can_delete_employee`,`can_create_school`,`can_read_school`,`can_update_school`,`can_delete_school`,`can_create_class`,`can_read_class`,`can_update_class`,`can_delete_class`,`can_create_discipline`,`can_read_discipline`,`can_update_discipline`,`can_delete_discipline`,`can_vinculate_student`,`can_vinculate_employee`,`can_vinculate_class`,`can_vinculate_discipline`,`created_at`) VALUES (1,'manager',1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,NOW());
INSERT INTO `roles` (`role_id`,`role_name`,`can_create_student`,`can_update_student`,`can_delete_student`,`can_create_employee`,`can_read_employee`,`can_update_employee`,`can_delete_employee`,`can_create_school`,`can_read_school`,`can_update_school`,`can_delete_school`,`can_create_class`,`can_read_class`,`can_update_class`,`can_delete_class`,`can_create_discipline`,`can_read_discipline`,`can_update_discipline`,`can_delete_discipline`,`can_vinculate_student`,`can_vinculate_employee`,`can_vinculate_class`,`can_vinculate_discipline`,`created_at`) VALUES (2,'professor',0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,NOW());
INSERT INTO `roles` (`role_id`,`role_name`,`can_create_student`,`can_update_student`,`can_delete_student`,`can_create_employee`,`can_read_employee`,`can_update_employee`,`can_delete_employee`,`can_create_school`,`can_read_school`,`can_update_school`,`can_delete_school`,`can_create_class`,`can_read_class`,`can_update_class`,`can_delete_class`,`can_create_discipline`,`can_read_discipline`,`can_update_discipline`,`can_delete_discipline`,`can_vinculate_student`,`can_vinculate_employee`,`can_vinculate_class`,`can_vinculate_discipline`,`created_at`) VALUES (3,'student',0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,NOW());

drop table teams_users;
drop table teams;
drop table disciplines;
drop table schools;
drop table users;
drop table roles;