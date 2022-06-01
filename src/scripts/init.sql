CREATE DATABASE sge_db

use sge_db

CREATE TABLE `roles` (
  `role_id` VARCHAR(38) NOT NULL,
  `role_name` VARCHAR(255),
  `can_add_employee` TINYINT(1),
  `can_create_lead` TINYINT(1),
  `can_edit_lead` TINYINT(1),
  `can_delete_lead` TINYINT(1),
  `can_vinculate_lead` TINYINT(1),
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME,
  PRIMARY KEY (`role_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO `roles` (`role_id`,`role_name`,`can_add_employee`,`can_create_lead`,`can_edit_lead`,`can_vinculate_lead`,`can_delete_lead`,`created_at`) VALUES (uuid(),'manager',1,1,1,1,1,NOW());
INSERT INTO `roles` (`role_id`,`role_name`,`can_add_employee`,`can_create_lead`,`can_edit_lead`,`can_vinculate_lead`,`can_delete_lead`,`created_at`) VALUES (uuid(),'employee',0,1,1,0,0,NOW());

CREATE TABLE `users` (
  `user_id` VARCHAR(38) NOT NULL,
  `email` VARCHAR(255) UNIQUE,
  `name` VARCHAR(255),
  `role_id_fk` VARCHAR(38),
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME,
  PRIMARY KEY (`user_id`),
  FOREIGN KEY (`role_id_fk`) REFERENCES `roles` (`role_id`) ON DELETE SET NULL 
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `leads` (
  `lead_id` VARCHAR(38) NOT NULL,
  `email` VARCHAR(255),
  `phone` VARCHAR(255),
  `name` VARCHAR(255),
  `age` TINYINT,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME,
  `user_id_fk` VARCHAR(38) NOT NULL,
  `status` VARCHAR (30),
  `obs` VARCHAR(1024),
  `valor_total_plano` double DEFAULT NULL,
  PRIMARY KEY (`lead_id`),
  FOREIGN KEY (`user_id_fk`) REFERENCES `users` (`user_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `users_integrations` (
  `user_integration_id` VARCHAR(38) NOT NULL,
  `integration_url` VARCHAR(500) UNIQUE ,
  `integration_token` VARCHAR(50) UNIQUE,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME,
  `user_id_fk` VARCHAR(38) NOT NULL,
  PRIMARY KEY (`user_integration_id`),
  FOREIGN KEY (`user_id_fk`) REFERENCES `users` (`user_id`) ON DELETE CASCADE 
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `manager_employee` (
  `manager_employee_id` VARCHAR(38) NOT NULL,
  `manager_id_fk` VARCHAR(38) NOT NULL,
  `employee_id_fk` VARCHAR(38) NOT NULL,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME,  
  PRIMARY KEY (`manager_employee_id`),
  FOREIGN KEY (`manager_id_fk`) REFERENCES `users` (`user_id`) ON DELETE CASCADE,
  FOREIGN KEY (`employee_id_fk`) REFERENCES `users` (`user_id`) ON DELETE CASCADE  
)ENGINE=InnoDB DEFAULT CHARSET=utf8;